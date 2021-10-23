const fs = require('fs').promises;
const data = require('./data.js');
const { agregators, datasetOfWarehouse } = require('./datasetOfWarehouse');

const resultIds = agregators.map(a => a.id);
const result = datasetOfWarehouse.filter(({ Id, Day }) => {
  const day = +Day;
  return resultIds.includes(Id) && day >= 0 && day <= 14;
});

const agregateWithValidOccupied = result.filter(({ OccupiedPercentage }) => (+OccupiedPercentage > 0));

const agregateWithWarehouse = data.ResourceWarehouse.reduce((acc, { Id, InputSP, OutputSP }) => {
  acc[Id] = {
    InputSP: InputSP ? InputSP.split(';') : [],
    OutputSP: OutputSP ? OutputSP.split(';') : []
  }
  return acc
}, {});

// filter agregate and connect it with warehouse
const warehouseWithAgregateGroupWithLowOccupied = agregateWithValidOccupied.map(({
  dStart,
  OccupiedPercentage,
  Id,
  machineId
}) => {
  if (+OccupiedPercentage < 80) return {
    dayWithLowOccupied: new Date(dStart),
    Id,
    OutputSP: agregateWithWarehouse[Id] ? agregateWithWarehouse[Id].OutputSP : [],
    InputSP: agregateWithWarehouse[Id] ? agregateWithWarehouse[Id].InputSP : [],
    OccupiedPercentage: +OccupiedPercentage,
    machineId
  }
}).filter(data => data);

const problemsAgregateWithoutWarehouse = [];
const problemsAgregateWithWarehouse = [];
warehouseWithAgregateGroupWithLowOccupied.forEach((agregate) => {
  if (!agregate.OutputSP.length && !agregate.InputSP.length) {
    problemsAgregateWithoutWarehouse.push(agregate);
    return;
  }
  problemsAgregateWithWarehouse.push(agregate);
})

// statictic by machine
const oftenWithProblems = {};
problemsAgregateWithWarehouse.forEach(({ machineId }) => {
  oftenWithProblems[machineId] = oftenWithProblems[machineId] ? oftenWithProblems[machineId] + 1 : 1;
})

const moreThanFiveProblems = Object.keys(oftenWithProblems).reduce((acc, machine) => {
  oftenWithProblems[machine] >= 5 ? (acc[machine] = oftenWithProblems[machine]) : null;
  return acc;
}, {});

console.log('often with problem more than 5 times ', moreThanFiveProblems);

const warehouses = {};

function getWarehousesId({ ResourceWarehouse, Remains }) {
  ResourceWarehouse.forEach((obj) => {
    if (obj.InputSP) {
      const warehousesId = obj.InputSP.split(';');
      warehousesId.forEach((warehouseId) => {
        if (!warehouses[warehouseId]) {
          warehouses[warehouseId] = {
            dates: [],
            maximum: 0,
            likeInput: [obj.Id],
            likeOutput: []
          };
          Remains.forEach(({ Id, PlannedDate, StockLevel, maximumAmountOfStocks, }) => {
            if (Id === warehouseId) {
              if (!warehouses[warehouseId].maximum) {
                warehouses[warehouseId].maximum = +maximumAmountOfStocks;
              }
              const dayInfo = {
                date: new Date(PlannedDate),
                stockLevel: +StockLevel,
              };
              warehouses[warehouseId].dates.push(dayInfo)
            }
          });
        } else {
          if (!warehouses[warehouseId].likeInput.includes(obj.Id)) warehouses[warehouseId].likeInput.push(obj.Id)
        }
      })
    }
    if (obj.OutputSP) {
      const warehousesId = obj.OutputSP.split(';');
      warehousesId.forEach((warehouseId) => {
        if (!warehouses[warehouseId]) {
          warehouses[warehouseId] = {
            dates: [],
            maximum: 0,
            likeInput: [],
            likeOutput: [obj.Id]
          };
          Remains.forEach(({ Id, PlannedDate, StockLevel, maximumAmountOfStocks }) => {
            if (Id === warehouseId) {
              if (!warehouses[warehouseId].maximum) {
                warehouses[warehouseId].maximum = +maximumAmountOfStocks;
              }
              const dayInfo = {
                date: new Date(PlannedDate),
                stockLevel: +StockLevel,
              };
              warehouses[warehouseId].dates.push(dayInfo)
            }
          });
        } else {
          if (!warehouses[warehouseId].likeOutput.includes(obj.Id)) warehouses[warehouseId].likeOutput.push(obj.Id)
        }
      })
    }
  });
}


getWarehousesId(data);

const WARNINGS = {
  NOT_ENOUGH_RESOURSES: 'not enough resources',
  NOT_ENOUGH_SPACE: 'not enough space'
};

const analizeWarhouses = {};
problemsAgregateWithWarehouse.forEach(({ machineId, InputSP, OutputSP, dayWithLowOccupied }) => {
  const timestamp = dayWithLowOccupied.getTime();
  analizeWarhouses[machineId] = analizeWarhouses[machineId] || {};
  const analizeCurrentMachine = analizeWarhouses[machineId][timestamp] || {};
  analizeWarhouses[machineId][timestamp] = analizeCurrentMachine;
  analizeCurrentMachine.inputInfo = analizeCurrentMachine.inputInfo || {};
  InputSP.forEach(warehouse => {
    const inputWarehouse = warehouses[warehouse];
    if (!inputWarehouse) {
      analizeCurrentMachine.inputInfo[warehouse] = undefined;
      return;
    }

    const dataByDate = inputWarehouse.dates.find(({ date }) => date.getTime() === timestamp);
    if (!dataByDate) {
      analizeCurrentMachine.inputInfo[warehouse] = undefined;
      return;
    }
    analizeCurrentMachine.inputInfo[warehouse] = dataByDate.stockLevel <= 0 ? WARNINGS.NOT_ENOUGH_RESOURSES : undefined;
  })

  analizeCurrentMachine.outputInfo = analizeCurrentMachine.outputInfo || {};
  OutputSP.forEach(warehouse => {
    const outputWarehouse = warehouses[warehouse];
    if (!outputWarehouse) {
      analizeCurrentMachine.outputInfo[warehouse] = undefined;
      return;
    }
    const dataByDate = outputWarehouse.dates.find(({ date }) => date.getTime() === timestamp);
    if (!dataByDate) {
      analizeCurrentMachine.outputInfo[warehouse] = undefined;
      return;
    }

    analizeCurrentMachine.outputInfo[warehouse] = dataByDate.stockLevel > outputWarehouse.maximum ? WARNINGS.NOT_ENOUGH_SPACE : undefined;
  })
});

const infoByMachine = {};
problemsAgregateWithWarehouse.forEach(({ machineId }) => {
  const machineProblems = analizeWarhouses[machineId];
  const resultFromAnalysis = Object.keys(machineProblems);

  infoByMachine[machineId] = {};
  infoByMachine[machineId].agregateBefore = {};
  const agregateBefore = infoByMachine[machineId].agregateBefore;
  resultFromAnalysis.forEach(timestamp => {
    agregateBefore[timestamp] = {};
    const inputProblem = machineProblems[timestamp].inputInfo;
    Object.keys(inputProblem).forEach(warhouse => {
      if (!inputProblem[warhouse]) return;
      const supplyAgregateWithProblem = warehouses[warhouse].likeInput;
      agregateBefore[timestamp] = supplyAgregateWithProblem.map(agregateId => {
        const agregateFromListOfInput = agregateWithValidOccupied.find(({ machineId: machineIdFromFullBase, dStart }) => machineIdFromFullBase === agregateId && new Date(dStart).getTime() === timestamp);
        return {
          machineId: agregateId,
          occupiedPercentage: agregateFromListOfInput ? agregateFromListOfInput.OccupiedPercentage : 'no data'
        }
      })
    })
  });

  infoByMachine[machineId].agregateAfter = {};
  const agregateAfter = infoByMachine[machineId].agregateAfter;
  resultFromAnalysis.forEach(timestamp => {
    agregateAfter[timestamp] = {};
    const outputProblem = machineProblems[timestamp].outputInfo;
    Object.keys(outputProblem).forEach(warhouse => {
      if (!outputProblem[warhouse]) return;
      const supplyAgregateWithProblem = warehouses[warhouse].likeOutput;
      agregateAfter[timestamp] = supplyAgregateWithProblem.map(agregateId => {
        const agregateFromListOfInput = agregateWithValidOccupied.find(({ machineId: machineIdFromFullBase, dStart }) => machineIdFromFullBase === agregateId && new Date(dStart).getTime() === timestamp);
        return {
          machineId: agregateId,
          occupiedPercentage: agregateFromListOfInput ? agregateFromListOfInput.OccupiedPercentage : 'no data'
        }
      })
    })
  });
})

fs.writeFile('./analyzeMostLowWorkedAgregate.json', JSON.stringify(moreThanFiveProblems));
fs.writeFile('./analyzeWarhouses.json', JSON.stringify(analizeWarhouses));
fs.writeFile('./analyzeSupplyAndConsumption.json', JSON.stringify(infoByMachine));

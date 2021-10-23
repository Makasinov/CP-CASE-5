const fs = require('fs').promises;
const data = require('./data.js');
const { agregators, datasetOfWarehouse } = require('./datasetOfWarehouse');

const resultIds = agregators.map(a => a.id);
const result = datasetOfWarehouse.filter(({Id, Day}) => {
    const day = +Day;
    return resultIds.includes(Id) && day >= 0 && day <= 14;
});

const agregateWithValidOccupied = result.filter(({OccupiedPercentage}) => (+OccupiedPercentage > 0));

const agregateWithWarehouse = data.ResourceWarehouse.reduce((acc, {Id, InputSP, OutputSP}) => {
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
problemsAgregateWithWarehouse.forEach(({machineId}) => {
    oftenWithProblems[machineId] = oftenWithProblems[machineId] ? oftenWithProblems[machineId] + 1 : 1;
})

const moreThanFiveProblems = Object.keys(oftenWithProblems).reduce((acc, machine) => {
    oftenWithProblems[machine] >= 5 ? (acc[machine] = oftenWithProblems[machine]) : null;
    return acc;
}, {});

console.log('often with problem more than 5 times ', moreThanFiveProblems);

const warehouses = {};

function getWarehousesId({ResourceWarehouse, Remains}) {
    ResourceWarehouse.forEach(({ InputSP, OutputSP, id}) => {
        if (InputSP) {
            const warehousesId = InputSP.split(';');
            warehousesId.forEach((warehouseId) => {
                if (!warehouses[warehouseId]) {
                    warehouses[warehouseId] = {
                        dates: [],
                        maximum: '',
                        likeInput: [id],
                        likeOutput: []
                    };
                    Remains.forEach(({Id, PlannedDate, StockLevel, maximumAmountOfStocks,}) => {
                        if (Id === warehouseId) {
                            if (!warehouses[warehouseId].maximum) {
                                warehouses[warehouseId].maximum = maximumAmountOfStocks;
                            }
                            const dayInfo = {
                                date: new Date(PlannedDate),
                                stockLevel: StockLevel,
                            };
                            warehouses[warehouseId].dates.push(dayInfo)
                        }
                    });
                } else {
                    warehouses[warehouseId].likeInput.push(id)
                }
            })
        }
        if (OutputSP) {
            const warehousesId = OutputSP.split(';');
            warehousesId.forEach((warehouseId) => {
                if (!warehouses[warehouseId]) {
                    warehouses[warehouseId] = {
                        dates: [],
                        maximum: '',
                        likeInput: [],
                        likeOutput: [id]
                    };
                    Remains.forEach(({Id, PlannedDate, StockLevel, maximumAmountOfStocks}) => {
                        if (Id === warehouseId) {
                            if (!warehouses[warehouseId].maximum) {
                                warehouses[warehouseId].maximum = maximumAmountOfStocks;
                            }
                            const dayInfo = {
                                date: new Date(PlannedDate),
                                stockLevel: StockLevel,
                            };
                            warehouses[warehouseId].dates.push(dayInfo)
                        }
                    });
                } else {
                    warehouses[warehouseId].likeOutput.push(id)
                }
            })
        }
    });
}

getWarehousesId(data);

const analizeWarhouses = {};
problemsAgregateWithWarehouse.forEach(({machineId, InputSP, OutputSP, dayWithLowOccupied}) => {

    const analizeCurrentMachine = {};
    analizeWarhouses[machineId] = analizeCurrentMachine;
    InputSP.forEach(wharehouse => {
        analizeCurrentMachine.inputInfo = {};
        const inputWharehouse = warehouses[wharehouse];
        if (!inputWharehouse) {
            analizeCurrentMachine.inputInfo[wharehouse] = 'no data for inputSP';
            return;
        }

        const dataByDate = inputWharehouse.dates.find(({date}) => date.getTime() == dayWithLowOccupied.getTime());
        if (!dataByDate) {
            analizeCurrentMachine.inputInfo[wharehouse] = 'no data about problem days';
            return;
        }
        analizeCurrentMachine.inputInfo[wharehouse] = dataByDate.stockLevel <= 0 ? 'not enough resources' : 'enough resources';
    })

    OutputSP.forEach(wharehouse => {
        analizeCurrentMachine.outputInfo = {};
        const outputWharehouse = warehouses[wharehouse];
        if (!outputWharehouse) {
            analizeCurrentMachine.outputInfo[wharehouse] = 'no data for outputSP';
            return;
        }
        const dataByDate = outputWharehouse.dates.find(({date}) => date.getTime() == dayWithLowOccupied.getTime());
        if (!dataByDate) {
            analizeCurrentMachine.outputInfo[wharehouse] = 'no data about problem days';
            return;
        }
        analizeCurrentMachine.outputInfo[wharehouse] = dataByDate.stockLevel > dataByDate.maximum ? 'not enough space' : 'enough space';
    })
});

fs.writeFile('./analizeWarhouses.json', JSON.stringify(analizeWarhouses));


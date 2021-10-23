const fs = require('fs').promises;
const data = require('./data/data.js');
const { agregators, datasetOfWarehouse } = require('./data/datasetOfWarehouse');
const { createWarehousesDictionary } = require('./helpers/createWarehousesDictionary');
const { analazySupplyAndConsumptionAgregate } = require('./helpers/analazySupplyAndConsumptionAgregate');
const { analizeWarhouses } = require('./helpers/analizeWarhouses');
const { getOftenWithProblems } = require('./helpers/getOftenWithProblems');
const { getAgregatesWithProblems } = require('./helpers/getAgregatesWithProblems');

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

const {
  problemsAgregateWithWarehouse,
  problemsAgregateWithoutWarehouse
} = getAgregatesWithProblems({
  agregateWithValidOccupied,
  agregateWithWarehouse,
  occupiedLimit: 80
})

// statictic by machine
const moreThanFiveProblems = getOftenWithProblems(problemsAgregateWithWarehouse, 5);

const warehouses = createWarehousesDictionary(data);

const analizedWarhouses = analizeWarhouses({
  problemsAgregateWithWarehouse,
  warehouses
});

const infoByMachine = analazySupplyAndConsumptionAgregate({
  problemsAgregateWithWarehouse,
  analizedWarhouses,
  warehouses,
  agregateWithValidOccupied
});

fs.writeFile('./analyzeMostLowWorkedAgregate.json', JSON.stringify(moreThanFiveProblems));
fs.writeFile('./analyzeWarhouses.json', JSON.stringify(analizedWarhouses));
fs.writeFile('./analyzeSupplyAndConsumption.json', JSON.stringify(infoByMachine));

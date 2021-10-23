function getAgregatesWithProblems({
  agregateWithValidOccupied,
  agregateWithWarehouse,
  occupiedLimit
}) {
  // filter agregate and connect it with warehouse
  const warehouseWithAgregateGroupWithLowOccupied = agregateWithValidOccupied.map(({
    dStart,
    OccupiedPercentage,
    Id,
    machineId
  }) => {
    if (+OccupiedPercentage < occupiedLimit) return {
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

  return {
    problemsAgregateWithoutWarehouse,
    problemsAgregateWithWarehouse
  }
}

module.exports = {
  getAgregatesWithProblems
}

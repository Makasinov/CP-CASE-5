const WARNINGS = {
  NOT_ENOUGH_RESOURSES: 'not enough resources',
  NOT_ENOUGH_SPACE: 'not enough space'
};

function analizeWarhouses({
  problemsAgregateWithWarehouse,
  warehouses
}) {
  const analizedWarhouses = {};

  problemsAgregateWithWarehouse.forEach(({ machineId, InputSP, OutputSP, dayWithLowOccupied }) => {
    const timestamp = dayWithLowOccupied.getTime();
    analizedWarhouses[machineId] = analizedWarhouses[machineId] || {};
    const analizeCurrentMachine = analizedWarhouses[machineId][timestamp] || {};
    analizedWarhouses[machineId][timestamp] = analizeCurrentMachine;
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

  return analizedWarhouses;
}

module.exports = {
  analizeWarhouses
}

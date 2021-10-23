function analazySupplyAndConsumptionAgregate({
  problemsAgregateWithWarehouse,
  analizedWarhouses,
  warehouses,
  agregateWithValidOccupied
}) {
  const infoByMachine = {};

  problemsAgregateWithWarehouse.forEach(({ machineId }) => {
    const machineProblems = analizedWarhouses[machineId];
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

  return infoByMachine;
}

module.exports = {
  analazySupplyAndConsumptionAgregate
}

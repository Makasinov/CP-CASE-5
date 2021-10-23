function getOftenWithProblems(problemsAgregateWithWarehouse, countOfProblem) {
  const oftenWithProblems = {};
  problemsAgregateWithWarehouse.forEach(({ machineId }) => {
    oftenWithProblems[machineId] = oftenWithProblems[machineId] ? oftenWithProblems[machineId] + 1 : 1;
  })

  const moreThanCountOfProblem = Object.keys(oftenWithProblems).reduce((acc, machine) => {
    oftenWithProblems[machine] >= countOfProblem ? (acc[machine] = oftenWithProblems[machine]) : null;
    return acc;
  }, {});

  return moreThanCountOfProblem;
}

module.exports = {
  getOftenWithProblems
}

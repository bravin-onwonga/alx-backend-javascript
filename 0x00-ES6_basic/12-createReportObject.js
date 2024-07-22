export default function createReportObject(employeesList) {
  const myobj = { allEmployees: {},
    getNumberOfDepartments: (departmentObjs) => {
      return (departmentObjs.length);
    }
  };

  for (const employee of employeesList) {
    myobj['allEmployees'][employee] = employeesList[employee];
  }

  return myobj;
}

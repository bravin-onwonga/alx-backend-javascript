export default function createReportObject(employeesList) {
  const myobj = {};
  for (const dep in employeesList) {
    if (dep in employeesList) {
      myobj[dep] = employeesList[dep];
    }
  }
  const allEmployees = myobj;
  return {
    allEmployees,
    getNumberOfDepartments() {
      return Object.keys(allEmployees).length;
    },
  };
}

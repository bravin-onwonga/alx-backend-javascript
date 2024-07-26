export default function createIteratorObject(report) {
  for (const employeeList in report['allEmployees']) {
    for (const department in employeeList) {
      console.log(employeeList[department]);
    }
  }
  return;
}
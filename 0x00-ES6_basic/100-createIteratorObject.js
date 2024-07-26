export default function createIteratorObject(report) {
  const myarr = [];

  for (const department in report.allEmployees) {
    if (department in report.allEmployees) {
      for (const name of report.allEmployees[department]) {
        myarr.push(name);
      }
    }
  }
  return myarr;
}

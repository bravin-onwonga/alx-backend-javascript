const filename = 'database.csv';

export const readDatabase = () => {
  const countStudents = async (filename) => {
    if (filename !== null) {
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          return ({ 'error': 'Cannot load the database' });
        }
        const arr = Array.from(data.split('\n'));
        let i = 1;
        const myObj = {};
        while (arr[i]) {
          const studentDetails = Array.from(arr[i].split(','));
          const course = studentDetails[3];
          if (myObj[course]) {
            myObj[course].push(studentDetails[0]);
          } else {
            myObj[course] = [studentDetails[0]];
          }
          i++;
        }
        let numberOfStudents = 0;
        for (const element in myObj) {
          numberOfStudents = numberOfStudents + myObj[element].length;
        }

        return ({ 'success': [myObj, numberOfStudents] });
      });
    }
  }
  countStudents(filename);
}

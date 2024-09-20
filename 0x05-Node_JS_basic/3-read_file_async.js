const fs = require('fs').promises;

const countStudents = async (filename) => {
  if (filename) {
    try {
      const data = await fs.readFile(filename, 'utf-8');
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
        i += 1;
      }
      let numberOfStudents = 0;
      for (const element in myObj) {
        if (element) {
          numberOfStudents += myObj[element].length;
        }
      }
      console.log(`Number of students: ${numberOfStudents}`);
      for (const ele in myObj) {
        if (ele) {
          const studentsInCourse = myObj[ele].length;
          console.log(`Number of students in ${ele}: ${studentsInCourse}. List: ${myObj[ele].join(', ')}`);
        }
      }
    } catch (err) {
      throw new Error('Cannot load the database');
    }
  } else {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;

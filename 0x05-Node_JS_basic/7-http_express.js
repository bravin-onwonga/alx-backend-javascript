const express = require('express');
const fs = require('fs');

const port = 1245;
const filename = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');

  const countStudents = async (filename) => {
    if (filename !== null) {
      fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
          throw new Error('Cannot load the database');
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
        res.write(`Number of students: ${numberOfStudents}\n`);
        for (const ele in myObj) {
          const studentsInCourse = myObj[ele].length;
          res.write(`Number of students in ${ele}: ${studentsInCourse}. List: ${myObj[ele].join(', ')}`);
        }
        res.end();
      });
    }
  };
  countStudents(filename);
});

app.listen(port, () => {
  console.log('Server is running');
});

module.exports = app;

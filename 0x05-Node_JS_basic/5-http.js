const http = require('http');
const fs = require('fs');

const hostname = 'localhost';
const port = 1245;
const filename = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const url = req.url;

  if (url === '/') {
    res.end('Hello Holberton School!');
  }

  if (url === '/students') {
    res.write('This is the list of our students');

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
            res.write(`Number of students in ${ele}: ${studentsInCourse}. List: ${myObj[ele].join(', ')}\n`);
          }
          res.end();
        });
      }
    };
    countStudents(filename);
  }
});

app.listen(port, hostname, () => {
  console.log(`App is running on ${hostname}:${port}`);
});

module.exports = app;

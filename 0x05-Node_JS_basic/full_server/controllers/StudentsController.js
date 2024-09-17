import { readDatabase } from '../utils/readDatabase.js'; 

class StudentsController {
  getAllStudents(req, res) {
    const myData = readDatabase();

    if (myData.error) {
      return res.status(500).send(myData.error);
    }
    
    const NUMBEROFSTUDENTS = myData.success[1];
    const STUDENTDETAILS = myData.success[0];

    res.write('This is the list of our students');
     
    res.write(`Number of students: ${NUMBEROFSTUDENTS}`);
    for (const student of STUDENTDETAILS) {
      res.write(`Number of students in ${student}: ${studentsInCourse}. List: ${myObj[student].join(', ')}`)
    }
    return res.status(200);
  }

  getAllStudentsByMajor(req, res) {
    const major = req.query.major;

    if (major === 'CS' || major === 'SWE') {
      const myData = readDatabase();

      if (myData.error) {
        return res.status(500).send(myData.error);
      }
      
      const NUMBEROFSTUDENTS = myData.success[1];
      const STUDENTDETAILS = myData.success[0];

      res.write('This is the list of our students');
      
      res.write(`Number of students: ${NUMBEROFSTUDENTS}`);
      for (const student of STUDENTDETAILS) {
        res.write(`Number of students in ${student}: ${studentsInCourse}. List: ${myObj[student].join(', ')}`)
      }
      return res.status(500);
    }
  }
}

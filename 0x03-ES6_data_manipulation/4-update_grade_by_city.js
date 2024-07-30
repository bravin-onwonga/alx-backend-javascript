export default function updateStudentGradeByCity(arr, city, gradeArr) {
  const newArr = arr.filter((ele) => ele.location === city).map((ele) => {
    const newEle = ele;
    for (const student of gradeArr) {
      if (student.studentId === newEle.id) {
        newEle.grade = student.grade;
      }
    }
    if (!newEle.grade) {
      newEle.grade = 'N/A';
    }
    return newEle;
  });

  return newArr;
}

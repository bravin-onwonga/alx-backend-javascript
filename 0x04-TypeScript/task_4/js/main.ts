/// <reference path='./subjects/Teacher.ts' />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();

export const cTeacher = { firstName: "Jane", lastName: "Doe", experienceTeachingC: 10 };

if (cpp) {
  console.log('C++');

  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
}

if (cpp) {
  console.log('Java');

  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
}

if (cpp) {
  console.log('React');

  cpp.setTeacher(cTeacher);
  console.log(cpp.getRequirements());
  console.log(cpp.getAvailableTeacher());
}

interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 25,
  location: 'Addis Ababa',
}

const studentsList = [student1, student2];

var table = document.createElement('table');

const body = table.createTBody();

studentsList.forEach(function (student) {
  let name = student.firstName;
  let location = student.location;

  const tr = body.insertRow();
  const tdName = document.createElement('td');
  const tdLocation = document.createElement('td');

  tdName.innerHTML = name;
  tdLocation.innerHTML = location;

  tr.appendChild(tdName);
  tr.appendChild(tdLocation);
});

document.body.appendChild(table);

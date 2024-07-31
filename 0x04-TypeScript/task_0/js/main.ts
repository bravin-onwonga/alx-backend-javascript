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

const headers = ['name', 'location']

var table = document.createElement('table');
document.body.appendChild(table);

for (const header in headers) {
  const tr = document.createElement('tr');
  table.appendChild(tr);
  const th = document.createElement("th");
  let text = document.createTextNode(header);
  th.appendChild(text);
  tr.appendChild(th);
}

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

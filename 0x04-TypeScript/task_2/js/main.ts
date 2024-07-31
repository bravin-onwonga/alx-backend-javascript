interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

interface createEmployeeInterface {
  (salary: string | number): DirectorInterface | TeacherInterface;
}

const createEmployee: createEmployeeInterface = (salary: string | number) => {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

interface isDirectorInterface {
  (employee: Director | Teacher): boolean;
}

const isDirector: isDirectorInterface = (employee: Director | Teacher): boolean => {
  return employee instanceof Director;
}

interface executeWorkInterface {
  (employee: Director | Teacher): string;
}

const executeWork: executeWorkInterface = (employee: Director | Teacher): string => {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
}

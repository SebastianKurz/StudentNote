export class Class {
  id: number;
  name: string;
  level: string;
  belongsToSchool: number;
}

export class Note {
id: number;
text: string;
timestamp: number;
authorTeacherId: number;
belongsToStudent: number;
}

export class School {
  id: number;
  name: string;
}

export class Student {
  id: number;
  firstname: String;
  lastname: String;
  belongsToClass: number;
}

export class Teacher {
  id: number;
  firstname: string;
  lastname: string;
  mailAddress: string;
  password: string;
  belongsToSchool: number;
}

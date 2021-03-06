export class Class {
  id: number;
  name: string;
  level: string;
  belongsToSchool: number;

  constructor(id: number, name: string, level: string, belongsToSchool: number){
    this.id = id;
    this.name = name;
    this.level = level;
    this.belongsToSchool = belongsToSchool;
  }
  toString(){
    return (this.id + this.name + this.level + this.belongsToSchool );}
}

export class Note {
id: number;
text: string;
timestamp: number;
authorTeacherId: number;
belongsToStudent: number;

constructor (id:number,text:string,timestamp:number,authorTeacherId:number,belongsToStudent:number){
this.id=id;
this.text=text;
this.timestamp=timestamp;
this.authorTeacherId=authorTeacherId;
this.belongsToStudent=belongsToStudent;
}
toString(){
  return (this.id + this.text + this.timestamp + this.authorTeacherId + this.belongsToStudent);}
}

export class School {
  id: number;
  name: string;

  constructor (id: number, name:string){
    this.id=id;
    this.name=name;
  }
  toString(){
    return (this.id + this.name );}
}

export class Student {
  id: number;
  firstname: string;
  lastname: string;
  belongsToClass: number;
constructor(id:number,firstname:string,lastname:string,belongsToClass:number){
  this.id=id;
  this.firstname=firstname;
  this.lastname=lastname;
  this.belongsToClass=belongsToClass;
}
toString(){
  return (this.id + this.firstname + this.lastname + this.belongsToClass); }
}

export class Teacher {
  id: number;
  firstname: string;
  lastname: string;
  mailAddress: string;
  password: string;
  belongsToSchool: number;

  constructor(id:number,firstname:string,lastname:string,mailAddress:string,password:string, belongsToSchool){
    this.id=id;
    this.firstname=firstname;
    this.lastname=lastname;
    this.mailAddress=mailAddress;
    this.password=password;
    this.belongsToSchool=belongsToSchool;
  }
  toString(){
    return (this.id + this.firstname + this.lastname + this.mailAddress + this.password + this.belongsToSchool );}
}

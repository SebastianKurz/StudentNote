import { Injectable } from '@angular/core';
import { Headers, Http,Response, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import {HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'

import { Class } from '../types/types';
import { Note } from '../types/types';
import { School } from '../types/types';
import { Student } from '../types/types';
import { Teacher } from '../types/types';

import { Global } from './local.service';

import * as func from '../lib/functions';

@Injectable()
export class getSchoolService {
  private global: Global;
  private http: Http;
  private url = 'get/getSchool';
  private router:Router;
  constructor(private globalData: Global, private httpImpl: Http,private routerImpl: Router) {
    this.global = globalData;
    this.http = httpImpl;
    this.router=routerImpl;
  }
  public getSchools(): Observable<School[]> {
    return this.http.get(`${this.global.basicUrl}/${this.url}`)
    .map((response : Response) => {
        return response.json().school.map(item => {
          return new School(
              item.id,
              item.name
            );
        });
      });
  }

  //return func.sort(this.global.gSchools,'name','asc');}

  public getSchool(id: number): Observable<School> {// With School ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
    .map( (response : Response) =>  response.json());
  }
}

@Injectable()
export class getClassService {
    private global: Global; private http: Http; private url = 'get/getClass';private router:Router;
    constructor(private globalData: Global, private httpImpl: Http,private routerImpl: Router) {
      this.global = globalData;
      this.http = httpImpl;
      this.router=routerImpl;
    }/*
  public getClasses(): Promise<Class[]> {

    return this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().parse as Class[])
             .catch(func.handleError);
    //return func.sort(this.global.gClasses,'level','asc');
  }*/
  public getClass(schoolid: number, id: number): Observable<Class> {// With Class ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${schoolid}/${id}`)
    .map( (response : Response) =>  response.json());
  }
  public getEntities(id: number): Observable<Class[]> {// With School ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
    .map((response : Response) => {
        return response.json().schoolClass.map(item => {
          return new Class(
              item.classId,
              item.name,
              item.level,
              item.belongsToSchool
            );
        });
      });
  }
}

@Injectable()
export class getStudentService {
    private global: Global; private http: Http; private url = 'get/getStudent';private router:Router;
    constructor(private globalData: Global, private httpImpl: Http,private routerImpl: Router) {
      this.global = globalData;
      this.http = httpImpl;
      this.router=routerImpl;
    }/*
  public getStudents(): Promise<Student[]> {

    return this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().parse as Student[])
             .catch(func.handleError);
    //return func.sort(this.global.gStudents,'level','asc');
  }*/
  public getStudent(classid: number, id: number): Observable<Student> {// With Student ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${classid}/${id}`)
    .map( (response : Response) =>  response.json());
  }
  public getEntities(id: number): Observable<Student[]> {// With Class ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
    .map((response : Response) => {
        return response.json().student.map(item => {
          return new Student(
              item.studentId,
              item.firstname,
              item.lastname,
              item.belongsToClass
            );
        });
      });
  }
}

@Injectable()
export class getNoteService {
    private global: Global; private http: Http; private url = 'get/getNote';private router:Router;
    constructor(private globalData: Global, private httpImpl: Http,private routerImpl: Router) {
      this.global = globalData;
      this.http = httpImpl;
      this.router=routerImpl;
    }/*
  public getNotes() : Promise<Note[]> {

    var a= this.http.get(`${this.global.basicUrl}/${this.url}`)
             .toPromise()
             .then(response => response.json().parse as Note[])
             .catch(func.handleError);
  return func.sort(a,'timestamp','dsc');
}*/
  public getNote(studentid: number, id: number): Observable<Note> {// With Note ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${studentid}/${id}`)
    .map( (response : Response) =>  response.json());
  }
  public getEntities(id: number): Observable<Note[]> {// With Student ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
    .map((response : Response) => {
        return response.json().note.map(item => {
          return new Note(
              item.noteId,
              item.text,
              item.timestamp,
              item.authorTeacherId,
              item.belongsToStudent
            );
        });
      });
  }
}
@Injectable()
export class getTeacherService {
    private global: Global;
     private http: Http;
      private url = 'get/getTeacher';
       private router:Router;
    constructor(private globalData: Global, private httpImpl: Http,private routerImpl: Router) {
      this.global = globalData;
      this.http = httpImpl;
      this.router=routerImpl;
    }/*
  public getTeachers(): Teacher[] {
    var a= this.http.get(`${this.global.basicUrl}/${this.url}`)
           .toPromise()
           .then(response => response.json().data as Teacher[])
           .catch(func.handleError);
return func.sort(a,'timestamp','dsc');
}*/
  public getTeacher(schoolid:number,id: number): Observable<Teacher> {// With Teacher ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${schoolid}/${id}`)
    .map( (response : Response) =>  response.json());
}
  public getEntities(id: number): Observable<Teacher[]> {//With School ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
    .map((response : Response) => {
        return response.json().teacher.map(item => {
          return new Teacher(
              item.teacherId,
              item.firstname,
              item.lastname,
              item.mailAddress,
              item.password,
              item.belongsToSchool
            );
        });
      });
}
  public getTeacherByMail(mail: string,password:string): Observable<Teacher> {//With Mail Address
    return this.http.get(`${this.global.basicUrl}/login/login/${mail}/${password}`)
    .map( (response : Response) => {
      let t = response.json();
      localStorage.setItem('CurrentTeacher', JSON.stringify(t));
      return t;
    });
}
}

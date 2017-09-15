import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import {HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';
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
  public getSchools(): Promise<School[]> {
    return this.http.get(`${this.global.basicUrl}/${this.url}`)
      .toPromise()
      .then(response => response.json().parse as School[])
      .catch(func.handleError);
  }

  //return func.sort(this.global.gSchools,'name','asc');}

  public getSchool(id: number): Promise<School> {// With School ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
      .toPromise()
      .then(response => response.json().parse as School)
      .catch(func.handleError);
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
  public getClass(schoolid: number, id: number): Promise<Class> {// With Class ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${schoolid}/${id}`)
      .toPromise()
      .then(response => response.json().parse as Class)
      .catch(func.handleError);
  }
  public getEntities(id: number): Promise<Class[]> {// With School ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
      .toPromise()
      .then(response => response.json().parse as Class[])
      .catch(func.handleError);
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
  public getStudent(classid: number, id: number): Promise<Student> {// With Student ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${classid}/${id}`)
      .toPromise()
      .then(response => response.json().parse as Student)
      .catch(func.handleError);
  }
  public getEntities(id: number): Promise<Student[]> {// With Class ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
      .toPromise()
      .then(response => response.json().parse as Student[])
      .catch(func.handleError);
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
  public getNote(studentid: number, id: number): Promise<Note> {// With Note ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${studentid}/${id}`)
      .toPromise()
      .then(response => response.json().parse as Note[])
      .catch(func.handleError);
  }
  public getEntities(id: number): Promise<Note[]> {// With Student ID
    var a = this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
      .toPromise()
      .then(response => response.json().parse as Note[])
      .catch(func.handleError);
    return func.sort(a, 'timestamp', 'dsc');
  }
}
@Injectable()
export class getTeacherService {
    private global: Global; private http: Http; private url = 'get/getTeacher';private router:Router;
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
  public getTeacher(id: number): Promise<Teacher> {// With Teacher ID
    return this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
      .toPromise()
      .then(response => response.json().parse as Teacher)
      .catch(func.handleError);
  }
  public getEntities(id: number): Promise<Teacher[]> {//With School ID
    var a = this.http.get(`${this.global.basicUrl}/${this.url}/${id}`)
      .toPromise()
      .then(response => response.json().parse as Teacher[])
      .catch(func.handleError);
    return func.sort(a, 'timestamp', 'dsc');
  }
  public getTeacherByMail(mail: string): Promise<Teacher> {//With Mail Address
    return this.http.get(`${this.global.basicUrl}/login/login/${mail}`)
      .toPromise()
      .then(response => response.json().parse as Teacher)
      .catch(func.handleError);
  }
}

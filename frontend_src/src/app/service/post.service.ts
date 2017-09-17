import { Injectable } from '@angular/core';
import { Headers, Http , Response, RequestOptions} from '@angular/http';
import {HttpModule} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'

import {Class } from '../types/types';
import {Note} from '../types/types';
import {School} from '../types/types';
import {Student} from '../types/types';
import {Teacher} from '../types/types';

import {Global} from './local.service';

import * as func from '../lib/functions';

@Injectable()
export class postSchoolService {
  private global : Global;
  private http: Http;
  private url = 'create/newSchool';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postSchool(school:School): Observable<any> {
    return this.http.post(`${this.global.basicUrl}/${this.url}/${school.name}`,JSON.stringify(school), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
}
}
@Injectable()
export class postClassService {
  private global : Global;
  private http: Http;
  private url = 'create/newClass';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postClass(klasse:Class): Observable<any> {
    return this.http.post(`${this.global.basicUrl}/${this.url}/${klasse.name}/${klasse.level}/${klasse.belongsToSchool}`, JSON.stringify(klasse), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
}
}
@Injectable()
export class postStudentService {
  private global : Global;
  private http: Http;
  private url = 'create/newStudent';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postStudent(student:Student): Observable<any> {
    return this.http.post(`${this.global.basicUrl}/${this.url}/${student.firstname}/${student.lastname}/${student.belongsToClass}`, JSON.stringify(student), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
}
}
@Injectable()
export class postNoteService {
  private global : Global;
  private http: Http;
  private url = 'create/newNote';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postNote(note:Note): Observable<any> {
    return this.http.post(`${this.global.basicUrl}/${this.url}/${note.text}/${note.authorTeacherId}/${note.belongsToStudent}`, JSON.stringify(note), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
}
}
@Injectable()
export class postTeacherService {
  private global : Global;
  private http: Http;
  private url = 'create/newTeacher';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postTeacher(teacher:Teacher): Observable<any> {
    return this.http.post(`${this.global.basicUrl}/${this.url}/${teacher.firstname}/${teacher.lastname}/${teacher.mailAddress}/${teacher.password}/${teacher.belongsToSchool}`, JSON.stringify(teacher), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
}
}

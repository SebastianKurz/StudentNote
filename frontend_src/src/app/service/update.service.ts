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
export class updateSchoolService {
  private global : Global;
  private http: Http;
  private url = 'update/updateSchool';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public updateSchool(school:School): Observable<any> {
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${school.id}/${school.name}`, JSON.stringify(school), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
  }
}
@Injectable()
export class updateClassService {
  private global : Global;
  private http: Http;
  private url = 'update/updateClass';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public updateClass(klasse:Class): Observable<any> {
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${klasse.id}/${klasse.level}/${klasse.name}`, JSON.stringify(klasse), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
  }
}
@Injectable()
export class updateStudentService {
  private global : Global;
  private http: Http;
  private url = 'update/updateStudent';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public updateStudent(student:Student): Observable<any>{
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${student.id}/${student.belongsToClass}/${student.firstname}/${student.lastname}`, JSON.stringify(student), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
  }
}
@Injectable()
export class updateNoteService {
  private global : Global;
  private http: Http;
  private url = 'update/updateNote';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public updateNote(note:Note): Observable<any> {
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${note.id}`, JSON.stringify(note), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
  }
}
@Injectable()
export class updateTeacherService {
  private global : Global;
  private http: Http;
  private url = 'update/updateTeacher';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public updateTeacher(teacher:Teacher): Observable<any> {
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${teacher.id}/${teacher.firstname}/${teacher.lastname}/${teacher.mailAddress}/${teacher.password}`, JSON.stringify(teacher), {headers: this.headers})
    .map( (response : Response) =>  response.json())
    .catch(func.handleError);
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http , Response, RequestOptions } from '@angular/http';
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
export class deleteSchoolService {
  private global : Global;
  private http: Http;
  private url = 'delete/deleteSchool';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
  }
  public deleteSchool(school:School): Observable<any> {
  return this.http.delete(`${this.global.basicUrl}/${this.url}/${school.id}`, {headers: this.headers})
  .map( (response : Response) =>  response.json())
  .catch(func.handleError);
  }
}
@Injectable()
export class deleteClassService {
  private global : Global;
  private http: Http;
  private url = 'delete/deleteClass';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
  }
  public deleteClass(klasse:Class): Observable<any> {
  return this.http.delete(`${this.global.basicUrl}/${this.url}/${klasse.id}`, {headers: this.headers})
  .map( (response : Response) =>  response.json())
  .catch(func.handleError);
  }
}
@Injectable()
export class deleteStudentService {
  private global : Global;
  private http: Http;
  private url = 'delete/deleteStudent';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
  }
  public deleteStudent(student:Student): Observable<any> {
  return this.http.delete(`${this.global.basicUrl}/${this.url}/${student.id}`, {headers: this.headers})
  .map( (response : Response) =>  response.json())
  .catch(func.handleError);
  }
}
@Injectable()
export class deleteNoteService {
  private global : Global;
  private http: Http;
  private url = 'delete/deleteNote';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
  }
  public deleteNote(note:Note): Observable<any> {
  return this.http.delete(`${this.global.basicUrl}/${this.url}/${note.id}`, {headers: this.headers})
  .map( (response : Response) =>  response.json())
  .catch(func.handleError);
  }
}
@Injectable()
export class deleteTeacherService {
  private global : Global;
  private http: Http;
  private url = 'delete/deleteTeacher';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
  }
  public deleteTeacher(teacher:Teacher): Observable<any> {
  return this.http.delete(`${this.global.basicUrl}/${this.url}/${teacher.id}`, {headers: this.headers})
  .map( (response : Response) =>  response.json())
  .catch(func.handleError);
  }
}

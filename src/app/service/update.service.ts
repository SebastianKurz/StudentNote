import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

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
  public updateSchool(school:School): Promise<number> {
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${school.id}`, JSON.stringify(school), {headers: this.headers})
    .toPromise()
    .then(() => 0)
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
  public updateClass(klasse:Class): Promise<number> {
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${klasse.id}`, JSON.stringify(klasse), {headers: this.headers})
    .toPromise()
    .then(() => 0)
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
  public updateStudent(student:Student): Promise<number> {
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${student.id}`, JSON.stringify(student), {headers: this.headers})
    .toPromise()
    .then(() => 0)
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
  public updateNote(note:Note): Promise<number> {
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${note.id}`, JSON.stringify(note), {headers: this.headers})
    .toPromise()
    .then(() => 0)
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
  public updateTeacher(teacher:Teacher): Promise<number> {
  return this.http
    .put(`${this.global.basicUrl}/${this.url}/${teacher.id}`, JSON.stringify(teacher), {headers: this.headers})
    .toPromise()
    .then(() => 0)
    .catch(func.handleError);
  }
}

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
export class postSchoolService {
  private global : Global;
  private http: Http;
  private url = 'post/postSchool';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postSchool(school:School): Promise<number> {
    return this.http
    .post(this.global.basicUrl, JSON.stringify(school), {headers: this.headers})
    .toPromise()
    .then(res => 0)
    .catch(func.handleError);
}
}
@Injectable()
export class postClassService {
  private global : Global;
  private http: Http;
  private url = 'post/postClass';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postClass(klasse:Class): Promise<number> {
    return this.http
    .post(this.global.basicUrl, JSON.stringify(klasse), {headers: this.headers})
    .toPromise()
    .then(res => 0)
    .catch(func.handleError);
}
}
@Injectable()
export class postStudentService {
  private global : Global;
  private http: Http;
  private url = 'post/postStudent';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postStudent(student:Student): Promise<number> {
    return this.http
    .post(this.global.basicUrl, JSON.stringify(student), {headers: this.headers})
    .toPromise()
    .then(res => 0)
    .catch(func.handleError);
}
}
@Injectable()
export class postNoteService {
  private global : Global;
  private http: Http;
  private url = 'post/postNote';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postNote(note:Note): Promise<number> {
    return this.http
    .post(this.global.basicUrl, JSON.stringify(note), {headers: this.headers})
    .toPromise()
    .then(res => 0)
    .catch(func.handleError);
}
}
@Injectable()
export class postTeacherService {
  private global : Global;
  private http: Http;
  private url = 'post/postTeacher';
  private headers = new Headers({'Content-Type': 'application/json'});
constructor (private globalData : Global, private httpImpl: Http){
this.global=globalData;
this.http=httpImpl;
}
  public postTeacher(teacher:Teacher): Promise<number> {
    return this.http
    .post(this.global.basicUrl, JSON.stringify(teacher), {headers: this.headers})
    .toPromise()
    .then(res => 0)
    .catch(func.handleError);
}
}

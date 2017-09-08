import {Class } from './types/types';
import {Note} from './types/types';
import {School} from './types/types';
import {Student} from './types/types';
import {Teacher} from './types/types';

export const CLASSES: Class[] = [
  { id: 13, name: 'GK Physik 1', level:'Q1',belongsToSchool: 1 },
  { id: 14, name: 'LK Informatik 1', level:'Q1',belongsToSchool: 1 },
  { id: 15, name: 'GK Deutsch 1', level:'Q1',belongsToSchool: 1 },
  { id: 16, name: 'GK Englisch 1', level:'Q1',belongsToSchool: 1 },
  { id: 17, name: 'LK Englisch 1', level:'Q1',belongsToSchool: 1 },
  { id: 18, name: 'GK Erdkunde 1', level:'Q1',belongsToSchool: 1 },
  { id: 19, name: 'LK Mathematik 1', level:'Q2',belongsToSchool: 1 },
  { id: 20, name: 'GK Mathematik 1', level:'Q2',belongsToSchool: 1 },
  { id: 21, name: 'GK Mathematik 1', level:'Q1',belongsToSchool: 1 },
  { id: 22, name: 'GK Mathematik 2' , level:'Q1',belongsToSchool: 1},
  { id: 7, name: 'Mathematik 1', level:'EF',belongsToSchool: 2 },
  { id: 8, name: 'Mathematik 2' , level:'EF',belongsToSchool: 2},
  { id: 9, name: 'Physik 1', level:'EF',belongsToSchool: 2},
  { id: 10, name: 'Informatik  1', level:'EF',belongsToSchool: 2 },
  { id: 11, name: 'GK Mathematik 1', level:'Q1',belongsToSchool: 1 },
  { id: 12, name: 'GK Mathematik 2' , level:'Q1',belongsToSchool: 1},
  { id: 23, name: 'GK Physik 1', level:'Q1',belongsToSchool: 1 },
  { id: 24, name: 'LK Informatik 1', level:'Q1',belongsToSchool: 1 },
  { id: 25, name: 'GK Deutsch 1', level:'Q1',belongsToSchool: 1 },
  { id: 26, name: 'GK Englisch 1', level:'Q1',belongsToSchool: 1 }
];

export const STUDENTS: Student[] = [
{id: 10, firstname:'Anton',lastname:'Müller',belongsToClass:8},
{id: 11, firstname:'Berta',lastname:'Schmitz',belongsToClass:8},
{id: 12, firstname:'Cäsar',lastname:'Meyer',belongsToClass:8},
{id: 13, firstname:'Dora',lastname:'Schneider',belongsToClass:8},
{id: 14, firstname:'Emil',lastname:'Steinhauer',belongsToClass:8},
{id: 15, firstname:'Friedrich',lastname:'Schmidt',belongsToClass:8},
{id: 16, firstname:'Gustav',lastname:'Weber',belongsToClass:8},
{id: 17, firstname:'Heinrich',lastname:'Fischer',belongsToClass:8},
{id: 18, firstname:'Ida',lastname:'Krause',belongsToClass:8}

];

export const TEACHERS: Teacher[] = [
{id: 10, firstname:'Professor',lastname:'Crey',mailAddress:'crey@schule.net',password:'123456',belongsToSchool:1},
{id: 11, firstname:'Direktor',lastname:'Knauer',mailAddress:'kauer@schule.net',password:'123456',belongsToSchool:1},
{id: 12, firstname:'Professor',lastname:'Bömmel',mailAddress:'boemmel@schule.net',password:'123456',belongsToSchool:1},
{id: 13, firstname:'Doktor',lastname:'Brett',mailAddress:'brett@schule.net',password:'123456',belongsToSchool:1},
{id: 14, firstname:'Musiklehrer',lastname:'Fridolin',mailAddress:'fridolin@schule.net',password:'123456',belongsToSchool:1}

];

export const SCHOOLS : School[] =[
  {id: 1, name:'Friedrich-Spee Gymnasium Geldern'},
  {id: 2, name:'Erasmus Gymnasium Grevenbroich'},
  {id: 3, name:'Konrad Adenauer Gemeinschaftsgesamtschule Bonn-Beuel'}

];

export const NOTES : Note[] =[
  {id: 10, text:'Test 1: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',timestamp : 1504872457000, authorTeacherId: 12 ,belongsToStudent: 10},
    {id: 11, text:'Test 2: Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',timestamp : 1504872935000, authorTeacherId: 10 ,belongsToStudent: 15}
]

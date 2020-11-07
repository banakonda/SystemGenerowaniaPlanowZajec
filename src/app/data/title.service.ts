import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DepartmentAPI } from './models/Department';
import { TitleAPI } from './models/Title';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  titles: TitleAPI[] = [{
    id: '1',
    name: 'inż.',
  }, {
    id: '2',
    name: 'mgr',
  }, {
    id: '3',
    name: 'mgr inż.',
  }, {
    id: '4',
    name: 'dr',
  }, {
    id: '5',
    name: 'dr inż.',
  }, {
    id: '6',
    name: 'dr hab.',
  }, {
    id: '7',
    name: 'dr hab. inż.',
  }, {
    id: '8',
    name: 'dr hab. prof PK',
  }, {
    id: '9',
    name: 'dr hab. inż prof PK',
  }, {
    id: '10',
    name: 'prof. dr hab.',
  }, {
    id: '11',
    name: 'prof. dr hab. inż.',
  }];

  constructor() { }

  getTitles(): Observable<DepartmentAPI[]> {
    return of(this.titles);
  }
}

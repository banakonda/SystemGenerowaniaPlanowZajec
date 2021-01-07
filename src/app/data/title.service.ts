import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    name: 'prof PK',
  }, {
    id: '9',
    name: 'prof. dr hab.',
  }, {
    id: '10',
    name: 'prof. dr hab. inż.',
  }];

  constructor() { }

  getTitles(): Observable<TitleAPI[]> {
    return of(this.titles);
  }
}

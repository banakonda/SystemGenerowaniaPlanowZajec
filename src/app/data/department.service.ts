import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DepartmentAPI } from './models/Department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments: DepartmentAPI = {
    id: 1,
    name: 'Wydział Informatyki i Telekomunikacji',
  };

  constructor() { }

  getDepartments(): Observable<DepartmentAPI[]> {
    return of([this.departments]);
  }
}

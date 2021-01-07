import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments: Object = {
    id: '1',
    name: 'Wydział Informatyki i Telekomunikacji',
  };

  constructor() { }

  getDepartments(): Observable<Object[]> {
    return of([this.departments]);
  }
}

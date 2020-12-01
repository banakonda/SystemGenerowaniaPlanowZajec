import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClassRoom, ClassRoomAPI } from '../data/models/ClassRoom';

@Injectable({
  providedIn: 'root'
})
export class ClassRoomService {
  baseUrl = 'http://localhost:8888/classroom';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getClassRooms(): Observable<ClassRoomAPI[]> {
    return this.httpClient.get<ClassRoomAPI[]>(this.baseUrl);
  }

  createClassRooms(classRoom: any): Observable<ClassRoom> {
    return this.httpClient.post<ClassRoom>(this.baseUrl, classRoom, { responseType: 'text' } as Object);
  }
  editClassRooms(classRoom: any): void {

  }
  deleteClassRooms(id: number): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url, { responseType: 'text' } as Object);
  }
}

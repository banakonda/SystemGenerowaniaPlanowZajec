import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClassRoom, ClassRoomAPI } from '../data/models/ClassRoom';

@Injectable({ providedIn: 'root' })
export class ClassRoomService {
  baseUrl = 'http://localhost:8888/classroom';
  requestOptions: Object = { responseType: 'text' };

  constructor(private httpClient: HttpClient) { }

  getClassRooms(): Observable<ClassRoomAPI[]> {
    return this.httpClient.get<ClassRoomAPI[]>(this.baseUrl);
  }
  getClassRoom(id: string): Observable<ClassRoomAPI> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<ClassRoomAPI>(url);
  }
  createClassRooms(classRoom: ClassRoom): Observable<ClassRoom> {
    return this.httpClient.post<ClassRoom>(this.baseUrl, classRoom, this.requestOptions);
  }
  editClassRooms(classRoom: ClassRoomAPI): Observable<ClassRoomAPI> {
    const url = `${this.baseUrl}/${classRoom.id}`;
    return this.httpClient.put<ClassRoomAPI>(url, classRoom, this.requestOptions);
  }
  deleteClassRooms(id: string): Observable<{}> {
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url);
  }
  async getAsyncClassRooms() {
    return this.httpClient.get<ClassRoomAPI[]>(this.baseUrl).toPromise();
  }
}

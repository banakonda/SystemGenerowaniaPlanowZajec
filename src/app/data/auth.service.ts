import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:8888/auth/signin';
  requestOptions: Object = { responseType: 'text' };

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAuth(user: Object): Observable<any> {
    return this.httpClient.post<Object>(this.baseUrl, user, this.requestOptions);
  }
}

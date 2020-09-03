import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  public isLoggedIn = false;
  private baseUrl = 'http://localhost:8081/';

  constructor(private http:HttpClient) { }

  createStudent(student: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'signin', student);
  }

  loginUser(loginId: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'login', loginId);
  }

  login(): boolean{
    return true;
  }
  logout(): boolean{
    return false;
  }
  
}                                           
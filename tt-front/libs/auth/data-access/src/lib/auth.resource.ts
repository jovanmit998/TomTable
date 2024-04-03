import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthResource {
  private readonly http = inject(HttpClient);

  loginUser(email: string, password: string): Observable<any> {
    return this.http.post(
      'http://localhost:3000/login',
      { email, password },
      { withCredentials: true }
    );
  }

  registerUser(
    email: string,
    username: string,
    password: string
  ): Observable<any> {
    return this.http.post('http://localhost:3000/register', {
      email,
      username,
      password,
    });
  }
}

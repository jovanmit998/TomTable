import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthResource {
  private readonly http = inject(HttpClient);

  loginUser(): Observable<any> {
    return this.http.get('http://localhost:3000');
  }
}

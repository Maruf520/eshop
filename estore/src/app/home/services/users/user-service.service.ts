import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { loginToken, User } from '../../types/user.type';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  createUser(user: User): Observable<any> {
    const url: string = 'http://localhost:5001/users/signup';

    return this.httpClient.post(url, user);
  }

  login(email: string, password: string): Observable<any> {
    const url: string = 'http://localhost:5001/users/login';
    return this.httpClient.post(url, { email: email, password: password });
  }

  activateToken(token: loginToken): void {
    localStorage.setItem('token', token.token);

    const expiryDate = new Date(
      Date.now() + Number(token.expiresInSeconds) * 1000
    );
    localStorage.setItem('expiry', expiryDate.toISOString());
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environments.baseURL;
  private user?: User;
  constructor(private http: HttpClient) {}

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    //return this.user; manera vieja
    return structuredClone(this.user);
  }

  login(emailUser: string, passUser: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}users/1`).pipe(
      tap( user => this.user = user ),
      tap( user => localStorage.setItem('token', user.idUser.toString())),
    );
  }



  Logout(): void {
    this.user = undefined;
   //otra op. localStorage.removeItem('token');
   localStorage.clear();

  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Usuario } from '../modelos/usuario';


@Injectable({ providedIn: 'root' })
export class AutenticacionService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
      return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>('http://localhost:8080/foodtruckme-spring/autenticacion', { username, password })
        .pipe(map(credentials => {
            if (credentials && credentials.token) {
                localStorage.setItem('currentUser', JSON.stringify(credentials));
                this.currentUserSubject.next(credentials);
            }
            return credentials;
        }));
}

  logout() {
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

}

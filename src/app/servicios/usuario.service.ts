import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';
import { map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UsuarioService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }
/*
  login(email: string, password: string):Observable<Usuario> {
    const url_login = 'http://localhost:8080/foodtruckme-spring/autenticacion';
    return this.http.post<Usuario>(url_login, {email:email, password:password}, this.httpOptions)
    .pipe(map(data => data));
  }

  logout() {
    localStorage.removeItem('usuarioActual');
  }

  setUsuarioActual(usuario:Usuario):void {
    let usuarioString = JSON.stringify(usuario);
    localStorage.setItem('usuarioActual', usuarioString);
  }

  getUsuarioActual() {
    let usuarioString = localStorage.getItem('usuarioActual');
    let usuario = JSON.parse(usuarioString);
    return usuario;
  }
*/
  updateUsuario(usuario:Usuario): Observable<any> {
    const foodtUrl = `http://localhost:8080/foodtruckme-spring/foodtruckers/${usuario.id}`;
    //this.setUsuarioActual(usuario);
    return this.http.put(foodtUrl, usuario, this.httpOptions);
  }

  getUsuarios(): Observable<Usuario[]> {
    const orgUrl = 'http://localhost:8080/foodtruckme-spring/organizadores';
    return this.http.get<Usuario[]>(orgUrl);
  }

  addUsuario(usuario: Usuario): Observable<Usuario> {
    if (usuario.tipo == 'Foodtrucker') {
      const foodtUrl = 'http://localhost:8080/foodtruckme-spring/foodtruckers';
      return this.http.post<Usuario>(foodtUrl, usuario, this.httpOptions);
    }
    const orgUrl = 'http://localhost:8080/foodtruckme-spring/organizadores';
    return this.http.post<Usuario>(orgUrl, usuario, this.httpOptions);
  }

}

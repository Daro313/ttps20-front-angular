import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';

import { AutenticacionService } from '../servicios/autenticacion.service'
import { Usuario } from '../modelos/usuario';


@Injectable({providedIn: 'root'})
export class UsuarioService {
  API_URI = 'http://localhost:8080/foodtruckme-spring'

  constructor(private http:HttpClient, private autenticacionService:AutenticacionService) { }

  getUsuarioById(id:number, rol:string): Observable<Usuario> {
    if (rol == 'Foodtrucker') {
      return this.http.get<any>(`${this.API_URI}/foodtruckers/${id}`);
    }
    return this.http.get<any>(`${this.API_URI}/organizadores/${id}`);
  }

  createUsuario(u:Usuario) {
    if (u.rol == 'Foodtrucker') {
      return this.http.post<any>(`${this.API_URI}/foodtruckers`,u)
    }
    return this.http.post<any>(`${this.API_URI}/organizadores`,u)
  }

  updateUsuario(id: number,u:Usuario) {
    if (u.rol == 'Foodtrucker') {
      return this.http.put<any>(`${this.API_URI}/foodtruckers/${id}`,u)
    }
    return this.http.put<any>(`${this.API_URI}/organizadores/${id}`,u)
  }
}

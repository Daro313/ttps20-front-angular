import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { AutenticacionService } from "./autenticacion.service";

@Injectable({
  providedIn: 'root'
})
export class TipoDeServicioService {
  API_URI = 'http://localhost:8080/foodtruckme-spring';

  constructor(
    private http:HttpClient,
    private autenticacionService:AutenticacionService
  ) { }

  getAll() {
    return this.http.get<any>(`${this.API_URI}/servicios`);
  }
}

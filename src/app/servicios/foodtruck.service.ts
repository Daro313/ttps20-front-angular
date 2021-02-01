import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Foodtruck } from '../modelos/foodtruck';

@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {

  API_URI = 'http://localhost:8080/foodtruckme-spring';

  constructor(private http:HttpClient) { }


  createFoodtruck(f:Foodtruck){
    return this.http.post<any>(`${this.API_URI}/foodtrucks`,f)
  }

  /*
  createUsuario(u:Usuario) {
    if (u.rol == 'Foodtrucker') {
      return this.http.post<any>(`${this.API_URI}/foodtruckers`,u)
    }
    return this.http.post<any>(`${this.API_URI}/organizadores`,u)
  }
  */
}

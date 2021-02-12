import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Foodtruck } from '../modelos/foodtruck';

@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {

  API_URI = 'http://localhost:8080/foodtruckme-spring';

  constructor(private http:HttpClient) { }


  createFoodtruck(ft:Foodtruck): Observable<Foodtruck> {
    return this.http.post<Foodtruck>(`${this.API_URI}/foodtrucks`,ft)
  }

  updateFoodtruck(ft:Foodtruck): Observable<any> {
    return this.http.put(`${this.API_URI}/foodtrucks/${ft.id}`,ft)
  }

  getFoodtruckById(id:number): Observable<Foodtruck> {
    return this.http.get<Foodtruck>(`${this.API_URI}/foodtrucks/${id}`)
  }

  deleteFoodtruck(ft:Foodtruck) {
    return this.http.delete<Foodtruck>(`${this.API_URI}/foodtrucks/${ft.id}`)
  }
}

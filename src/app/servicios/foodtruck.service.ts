import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Foodtruck } from '../modelos/foodtruck';

@Injectable({
  providedIn: 'root'
})
export class FoodtruckService {

  API_URI = 'http://localhost:8080/foodtruckme-spring';

  constructor(private http:HttpClient) { }


  createFoodtruck(ft:Foodtruck) {
    return this.http.post<any>(`${this.API_URI}/foodtrucks`,ft)
  }

  updateFoodtruck(ft:Foodtruck) {
    return this.http.put<any>(`${this.API_URI}/foodtrucks/${ft.id}`,ft)
  }

  getFoodtruckById(id:number) {
    return this.http.get<any>(`${this.API_URI}/foodtrucks/${id}`)
  }

  deleteFoodtruck(ft:Foodtruck): Observable<Foodtruck> {
    return this.http.delete<Foodtruck>(`${this.API_URI}/foodtrucks/${ft.id}`)
  }
}

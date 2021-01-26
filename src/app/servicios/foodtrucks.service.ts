import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Foodtruck } from '../modelos/foodtruck'


@Injectable({
  providedIn: 'root'
})
export class FoodtrucksService {

  private ftsUrl = 'http://localhost:8080/foodtruckme-spring/foodtrucks';

  constructor(private http: HttpClient) { }


  getFoodtrucks(): Observable<Foodtruck[]> {
    return this.http.get<Foodtruck[]>(this.ftsUrl);
  }

}

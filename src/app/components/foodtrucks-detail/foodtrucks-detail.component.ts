import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Foodtruck } from '../../modelos/foodtruck';
import { Ubicacion } from '../../modelos/ubicacion';
import { ImagenFt } from '../../modelos/imagenFt';
import { Puntaje } from '../../modelos/puntaje';

import { FoodtruckService } from '../../servicios/foodtruck.service';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-foodtrucks-detail',
  templateUrl: './foodtrucks-detail.component.html',
  styleUrls: ['./foodtrucks-detail.component.css']
})
export class FoodtrucksDetailComponent implements OnInit {

  ft: Foodtruck;

  constructor(
    private autenticacionService:AutenticacionService,
    private foodtruckService:FoodtruckService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadFoodtruck(this.activatedRoute.snapshot.params.id);
  }

  loadFoodtruck(id:number) {
    this.foodtruckService.getFoodtruckById(id)
    .subscribe(
      res => {
        this.ft = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

  /*loadFoodtruck(id:number) {
    this.foodtruckService.getFoodtruckById(id)
    .subscribe(
      res => {
        this.ft = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }*/
}

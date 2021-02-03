import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AutenticacionService } from '../../servicios/autenticacion.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { FoodtruckService } from "../../servicios/foodtruck.service";
import { Foodtruck } from '../../modelos/foodtruck'
@Component({
  selector: 'app-foodtruck-list',
  templateUrl: './foodtruck-list.component.html',
  styleUrls: ['./foodtruck-list.component.css']
})
export class FoodtruckListComponent implements OnInit {

  foodtrucks: Foodtruck[];

  constructor(
    private autenticacionService:AutenticacionService,
    private usuarioService:UsuarioService,
    private foodtruckService:FoodtruckService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getUserFoodtrucks();
  }

  getUserFoodtrucks() {
    const userId = this.autenticacionService.currentUserValue.userId;
    this.usuarioService.getUserFoodtrucks(userId!)
    .subscribe(
      res => {
        this.foodtrucks = res;
        console.log(res);
      },
      err => console.error(err)
    )
  }

  delete(ft:Foodtruck) {
    this.foodtrucks = this.foodtrucks.filter(f => f!==ft);
    this.foodtruckService.deleteFoodtruck(ft)
    .subscribe(
    );
  }

}

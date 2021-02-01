import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Foodtruck } from '../../modelos/foodtruck';
import { Usuario } from '../../modelos/usuario';
import { FoodtruckService } from '../../servicios/foodtruck.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { AutenticacionService } from '../../servicios/autenticacion.service';

@Component({
  selector: 'app-foodtruck-form',
  templateUrl: './foodtruck-form.component.html',
  styleUrls: ['./foodtruck-form.component.css']
})
export class FoodtruckFormComponent implements OnInit {

  foodtrucker: {};
  foodtruck: Foodtruck = {
    ftId: 0,
    nombre: '',
    descripcion: '',
    url: '',
    twitter: '',
    instagram: '',
    whatsapp: '',
    foodtrucker: {}
  };
  submitted = false;
  edit = false;

  constructor(
    private autenticacionService:AutenticacionService,
    private foodtruckService:FoodtruckService,
    private router:Router,
    private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarioById(this.autenticacionService.currentUserValue.userId!, this.autenticacionService.currentUserValue.rol)
      .subscribe(
        data => {
          this.foodtrucker = data;
        },
        err => console.error(err)
      );
  }

  saveFoodtruck() {
    this.submitted = true;
    this.foodtruck.foodtrucker = this.foodtrucker;
    this.foodtruckService.createFoodtruck(this.foodtruck)
    .subscribe(
      res => {
        alert('Foodtruck creado con exito');
        this.router.navigate(['users/perfil/foodtrucks']);
      },
      err => {
        console.error(err);
        alert('Algo fallo!');
      }
    );
  }
  /*
  saveUsuario() {
    this.submitted = true;
    this.usuarioService.createUsuario(this.usuario)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      err => console.error(err)
    );
  }
  */

}

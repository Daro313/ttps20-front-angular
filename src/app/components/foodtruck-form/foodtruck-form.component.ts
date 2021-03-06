import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Foodtruck } from '../../modelos/foodtruck';
import { Usuario } from '../../modelos/usuario';
import { FoodtruckService } from '../../servicios/foodtruck.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { TipoDeServicio } from '../../modelos/tipoDeServicio';
import { TipoDeServicioService } from "../../servicios/tipo-de-servicio.service";
import { ImagenFt } from "../../modelos/imagenFt";

@Component({
  selector: 'app-foodtruck-form',
  templateUrl: './foodtruck-form.component.html',
  styleUrls: ['./foodtruck-form.component.css']
})
export class FoodtruckFormComponent implements OnInit {

  foodtrucker: {};
  submitted = false;
  edit = false;
  sTipo: TipoDeServicio[];
  img= new ImagenFt();

  foodtruck: Foodtruck = {
    ftId: 0,
    nombre: '',
    descripcion: '',
    url: '',
    twitter: '',
    instagram: '',
    whatsapp: '',
    ubicacion: {},
    foodtrucker: {},
    imagenes:[],
    servicios: []
  };

  constructor(
    private autenticacionService:AutenticacionService,
    private foodtruckService:FoodtruckService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private usuarioService:UsuarioService,
    private tServicio:TipoDeServicioService
  ) { }

  ngOnInit(): void {
    this.img=new ImagenFt();
    this.foodtruck.imagenes.push(this.img);

    this.tServicio.getAll().subscribe(data => this.sTipo = data);
    const params = this.activatedRoute.snapshot.params;
    if(params.id) {
      this.loadFoodtruck(params.id)
    }else{
      this.loadFoodtrucker();
    }
  }

  loadFoodtrucker(){
    this.usuarioService.getUsuarioById(this.autenticacionService.currentUserValue.userId!, this.autenticacionService.currentUserValue.rol)
      .subscribe(
        data => {
          this.foodtrucker = data;
        },
        err => console.error(err)
      );
  }

  loadFoodtruck(id:number) {
      this.foodtruckService.getFoodtruckById(id)
      .subscribe(
        res => {
          console.log(res);
          this.foodtruck = res;
          this.edit = true;
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
        this.router.navigate(['users/perfil/foodtrucks']);
        alert('Foodtruck creado con exito');
      },
      err => {
        console.error(err);
        alert('Algo fallo!');
      }
    );
  }

  updateFoodtruck() {
    this.foodtruckService.updateFoodtruck(this.foodtruck)
    .subscribe(
      res => {
        this.router.navigate(['/users/perfil/foodtrucks'])
      },
      err => console.error(err)
    );
  }

  checkSelected(id:number):boolean {
    return this.foodtruck.servicios!.some(e => e.id == id);
  }

  onChange(s:TipoDeServicio, isChecked:boolean) {
    if(isChecked) {
        this.foodtruck.servicios!.push(s);
    } else {
      this.foodtruck.servicios = this.foodtruck.servicios!.filter(e => e.id !== s.id);
    }
  }

  addImgInput() {
    this.img = new ImagenFt();
    this.foodtruck.imagenes.push(this.img);
  }

  removeImgInput(index) {
    this.foodtruck.imagenes.splice(index,1);
  }

}

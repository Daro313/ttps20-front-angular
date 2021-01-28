import { Component, OnInit } from '@angular/core';

import { Foodtruck } from '../modelos/foodtruck'

@Component({
  selector: 'app-editar-foodtruck',
  templateUrl: './editar-foodtruck.component.html',
  styleUrls: ['./editar-foodtruck.component.css']
})
export class EditarFoodtruckComponent implements OnInit {
  foodtruck!: Foodtruck;

  constructor() {}

  ngOnInit(): void {
  }

  guardar(): void {}
}

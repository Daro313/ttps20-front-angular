import { Component, OnInit } from '@angular/core';
import { FoodtrucksService } from '../servicios/foodtrucks.service';
import { Foodtruck} from '../modelos/foodtruck'

@Component({
  selector: 'app-foodtrucks',
  templateUrl: './foodtrucks.component.html',
  styleUrls: ['./foodtrucks.component.css']
})
export class FoodtrucksComponent implements OnInit {
  foodtrucks: Foodtruck[];

  constructor(private foodtrucksService:FoodtrucksService) {
    this.foodtrucks = [];
  }

  ngOnInit(): void {
    this.getFoodtrucks();
  }

  getFoodtrucks(): void{
    this.foodtrucksService.getFoodtrucks()
    .subscribe(foodtrucks => this.foodtrucks = foodtrucks);
  }
}

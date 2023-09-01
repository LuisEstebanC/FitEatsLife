import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/product.service';
import { Results, PurpleProduct } from '../models/food.models';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})

export class FoodListComponent implements OnInit {

  //TODO: refactor this variable 
  foods: any;
  ingredients: PurpleProduct[] = [];
  errorMessage = '';

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.getAllProducts();

  }
  getAllProducts(): void {
    this.foodService.getFoods().subscribe({
      next: foods => this.logs(foods),
      error: err => this.errorMessage = err
    });
  }
  // getIngredients(){}
  logs(foods: Results) {
    this.foods = foods
    // console.log(foods);

  }

}

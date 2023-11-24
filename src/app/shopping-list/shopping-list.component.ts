import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [];
  constructor() {
    this.ingredients.push(
      new Ingredient(
        'Chicken',
        400
      ),
      new Ingredient(
        'Tomato',
        2
      )
    );
  }
}

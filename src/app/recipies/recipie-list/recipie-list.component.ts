import { Component } from '@angular/core';
import { Recipe } from '../recipie.model';

@Component({
  selector: 'app-recipie-list',
  templateUrl: './recipie-list.component.html',
  styleUrl: './recipie-list.component.css'
})
export class RecipieListComponent {
  recipies: Recipe[] = [];
  constructor() {
    this.recipies.push(
      new Recipe('shawarma', 'chicken', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXb3nLKc4awMfzpFDRTVOXhsfRezLFmEBU8HHTcBGDH0zRm_ynWk7w7SHhVCJ255OtZME&usqp=CAU')
    )
  }
}

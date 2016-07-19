import {Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Shnitzel', 'Very tasty', 'http://cook-wise.com/wp-content/uploads/parser/recipe-book-4.jpg', []),
    new Recipe('Summer Salad', 'Okayish', 'http://cook-wise.com/wp-content/uploads/parser/recipe-book-4.jpg', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {
  }

  onSelected(recipe: Recipe)  {
    this.recipeSelected.emit(recipe);
  }

}

import { Component } from '@angular/core';
import {HeaderComponent} from "./header.component";

@Component({
  moduleId: module.id,
  selector: 'recipe-book-app',
  templateUrl: 'recipe-book.component.html',
  directives: [HeaderComponent]
})
export class RecipeBookAppComponent {

}

import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

import { Recipe } from 'src/app/entities/recipe';
import { TacoService } from './../../services/taco-service';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
})
export class ListRecipesComponent implements OnInit {
  subcriptions!: Subscription;
  recipesFound$!: Observable<Recipe[]>;

  constructor(private tacoService: TacoService) {}

  ngOnInit(): void {
    this.subcriptions = this.tacoService
      .findAllRecipes()
      .subscribe((res: any) => {
        this.recipesFound$ = of(res);
      });
  }

  // tslint:disable-next-line: typedef
  onDeleteRecipe(event: Event): void {
    console.log(event);
    const idToDelete = event.target;
  }
}

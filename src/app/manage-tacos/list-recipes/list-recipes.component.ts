import * as fromApp from '../../app.reducer';

import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

import { Recipe } from 'src/app/entities/recipe';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { TacoService } from './../../services/taco-service';
import { map } from 'rxjs/operators';
import { provideMockStore } from '@ngrx/store/testing';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
})
export class ListRecipesComponent implements OnInit {
  subcriptions!: Subscription;
  recipesFound$!: Observable<Recipe[]>;
  isLoading$!: Observable<boolean>;

  constructor(
    private tacoService: TacoService,
    private router: Router,
    private store: Store<{ ui: fromApp.State }>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select((state: any) => state.ui.isLoading);
    this.getRecipes();
  }

  // tslint:disable-next-line: typedef
  private getRecipes() {
    this.subcriptions = this.tacoService
      .findAllRecipes()
      .subscribe((res: any) => {
        this.recipesFound$ = of(res);
      });
  }

  // tslint:disable-next-line: typedef
  onDeleteRecipe(recipe: any): void {
    console.log(`id to delete is ${recipe.id}`);
    this.tacoService.deleteRecipe(recipe.id).subscribe(() => {
      this.getRecipes();
    });
  }

  // tslint:disable-next-line: typedef
  onEditRecipe(recipe: any): void {
    console.log(`id to edit is ${recipe.id}`);
    this.router.navigateByUrl(`manage-tacos/recipe/${recipe.id}`);
    // this.router.navigate(['/recipe'], { queryParams: { id: recipe.id } });
  }
}

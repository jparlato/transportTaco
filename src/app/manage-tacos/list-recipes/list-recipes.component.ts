import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

import { Recipe } from 'src/app/entities/recipe';
import { Router } from '@angular/router';
import { TacoService } from './../../services/taco-service';
import { getAllRecipes } from 'server/get-recipes.route';

@Component({
  selector: 'app-list-recipes',
  templateUrl: './list-recipes.component.html',
  styleUrls: ['./list-recipes.component.css'],
})
export class ListRecipesComponent implements OnInit {
  subcriptions!: Subscription;
  recipesFound$!: Observable<Recipe[]>;

  constructor(private tacoService: TacoService, private router: Router) {}

  ngOnInit(): void {
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

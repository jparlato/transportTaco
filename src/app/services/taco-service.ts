import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from '../entities/recipe';
import { map } from 'rxjs/operators';

@Injectable()
export class TacoService {
  constructor(private http: HttpClient) {}

  // findCourseById(courseId: number): Observable<Course> {
  //     return this.http.get<Course>(`/api/courses/${courseId}`);
  // }

  // tslint:disable-next-line: typedef
  findTacoShellTypes() {
    return this.http
      .get(`/api/getShellTypes`)
      .pipe(map((res: any) => res['shellTypes']));
  }

  // tslint:disable-next-line: typedef
  findTacoProteinTypes() {
    return this.http
      .get(`/api/getProteinTypes`)
      .pipe(map((res: any) => res['ProteinTypes']));
  }

  // tslint:disable-next-line: typedef
  findTacoToppingTypes() {
    return this.http
      .get(`/api/getToppingTypes`)
      .pipe(map((res: any) => res['ToppingTypes']));
  }

  // tslint:disable-next-line: typedef
  saveRecipe(recipeId: string | number, changes: Partial<Recipe>) {
    return this.http.put('/api/recipe/' + recipeId, changes);
  }

  // tslint:disable-next-line: typedef
  createRecipe(recipe: Recipe) {
    console.log(`in service createReipe with ${JSON.stringify(recipe)}`);
    return this.http.post('/api/recipe', recipe);
  }

  // tslint:disable-next-line: typedef
  deleteRecipe(recipeId: string | number) {
    return this.http.delete('/api/recipe/' + recipeId);
  }

  findAllRecipes(): Observable<Recipe[]> {
    return this.http
      .get('/api/recipes')
      .pipe(map((res: any) => res['payload']));
  }
}

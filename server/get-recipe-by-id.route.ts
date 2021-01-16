import { Request, Response } from 'express';
import { RECIPES } from './db-data';

// tslint:disable-next-line: typedef
export function getRecipeById(req: Request, res: Response) {
  const recipeId = req.params['id'];

  const recipes: any = Object.values(RECIPES);

  // tslint:disable-next-line: no-shadowed-variable
  const recipe = recipes.find((rp: any) => rp.id === recipeId);

  setTimeout(() => {
    res.status(200).json(recipe);
  }, 1000);
}

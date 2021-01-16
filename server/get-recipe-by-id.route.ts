import { Request, Response } from 'express';

import { RECIPES } from './db-data';

// tslint:disable-next-line: typedef
export function getRecipeById(req: Request, res: Response) {
  // tslint:disable-next-line: no-debugger
  debugger;
  console.log('Retrieving recipies data BY ID ...');
  const recipeId = req.params['id'];
  // tslint:disable-next-line: no-debugger

  const recipes: any = Object.values(RECIPES);

  // tslint:disable-next-line: no-shadowed-variable
  // tslint:disable-next-line: triple-equals
  const recipe = recipes.find((rp: any) => rp.id == recipeId);

  setTimeout(() => {
    res.status(200).json(recipe);
  }, 1000);
}

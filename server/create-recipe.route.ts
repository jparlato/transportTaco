import { Request, Response } from 'express';

import { RECIPES } from './db-data';

export let recipeKeyCounter = 100;

// tslint:disable-next-line: typedef
export function createRecipe(req: Request, res: Response) {
  console.log('Creating new recipe ...');
  // tslint:disable-next-line: no-debugger
  // debugger;
  const changes = req.body;
  console.log(`reqest:  ${req}`);

  const newRecipe = {
    id: recipeKeyCounter,
    ...changes,
  };

  newRecipe.id = recipeKeyCounter;

  console.log(`recipe create using ${newRecipe}`);
  RECIPES[newRecipe.id] = newRecipe;

  recipeKeyCounter += 1;

  setTimeout(() => {
    res.status(200).json(newRecipe);
  }, 2000);
}

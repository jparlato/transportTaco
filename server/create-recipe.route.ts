import { Request, Response } from 'express';
import { RECIPES } from './db-data';

export let recipeKeyCounter = 100;

// tslint:disable-next-line: typedef
export function createRecipe(req: Request, res: Response) {
  console.log('Creating new recipe ...');

  const changes = req.body;

  const newRecipe = {
    id: recipeKeyCounter,
    seqNo: recipeKeyCounter,
    ...changes,
  };

  RECIPES[newRecipe.id] = newRecipe;

  recipeKeyCounter += 1;

  setTimeout(() => {
    res.status(200).json(newRecipe);
  }, 2000);
}

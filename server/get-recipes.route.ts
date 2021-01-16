import { Request, Response } from 'express';
import { RECIPES } from './db-data';

// tslint:disable-next-line: typedef
export function getAllRecipes(req: Request, res: Response) {
  console.log('Retrieving recipies data ...');

  setTimeout(() => {
    res.status(200).json({ payload: Object.values(RECIPES) });
  }, 1000);
}

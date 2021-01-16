import { Request, Response } from 'express';
import { RECIPES } from './db-data';

// tslint:disable-next-line: typedef
export function deleteRecipe(req: Request, res: Response) {
  console.log('Deleting recipe...');

  const id = req.params['id'];

  const course = RECIPES[id];

  delete RECIPES[id];

  setTimeout(() => {
    res.status(200).json({ id });
  }, 2000);
}

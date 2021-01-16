import { Request, Response } from 'express';

import { RECIPES } from './db-data';

// tslint:disable-next-line: typedef
export function saveRecipe(req: Request, res: Response) {
  console.log('Saving recipe ...');
  // tslint:disable-next-line: no-debugger
  // debugger;
  // tslint:disable-next-line: one-variable-per-declaration
  const id = req.params['id'],
    changes = req.body;

  RECIPES[id] = {
    ...RECIPES[id],
    ...changes,
  };

  setTimeout(() => {
    res.status(200).json(RECIPES[id]);
  }, 2000);
}

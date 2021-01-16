import { Request, Response } from 'express';

// tslint:disable-next-line: typedef
export function getToppingTypes(req: Request, res: Response) {
  res.status(200).json({
    ToppingTypes: [
      {
        code: 'CHEESE',
        description: 'Cheese',
      },
      {
        code: 'SALSA',
        description: 'Salsa',
      },
      {
        code: 'SOUR CREAM',
        description: 'Sour Cream',
      },
    ],
  });
}

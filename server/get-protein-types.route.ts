import { Request, Response } from 'express';

// tslint:disable-next-line: typedef
export function getProteinTypes(req: Request, res: Response) {
  res.status(200).json({
    ProteinTypes: [
      {
        code: 'MEAT',
        description: 'Meat',
      },
      {
        code: 'CHICKEN',
        description: 'Chicken',
      },
      {
        code: 'PORK',
        description: 'Pork',
      },
      {
        code: 'NONE',
        description: 'No Protein',
      },
    ],
  });
}

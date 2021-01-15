import { Request, Response } from 'express';

// tslint:disable-next-line: typedef
export function getShellTypes(req: Request, res: Response) {
  res.status(200).json({
    shellTypes: [
      {
        code: 'SOFTSHELL',
        description: 'Soft Shell',
      },
      {
        code: 'CORNCRISPY',
        description: 'Corn Crispy',
      },
      {
        code: 'GLUTENFREE',
        description: 'Gluten Free',
      },
    ],
  });
}

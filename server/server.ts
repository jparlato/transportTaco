import * as express from 'express';

import { Application } from 'express';
import { getShellTypes } from './get-shell-types.route';

const app: Application = express();

app.route('/api/getShellTypes').get(getShellTypes);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});

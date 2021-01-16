import * as express from 'express';

import { Application } from 'express';
import { getProteinTypes } from './get-protein-types.route';
import { getShellTypes } from './get-shell-types.route';
import { getToppingTypes } from './get-topping-types.route';

const app: Application = express();

app.route('/api/getShellTypes').get(getShellTypes);

app.route('/api/getProteinTypes').get(getProteinTypes);

app.route('/api/getToppingTypes').get(getToppingTypes);

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});

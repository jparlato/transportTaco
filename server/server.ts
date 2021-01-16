import * as express from 'express';

import { Application } from 'express';
import { createRecipe } from './create-recipe.route';
import { deleteRecipe } from './delete-recipe.route';
import { getProteinTypes } from './get-protein-types.route';
import { getShellTypes } from './get-shell-types.route';
import { getToppingTypes } from './get-topping-types.route';
import { saveRecipe } from './save-recipe.route';

const app: Application = express();
const bodyParser = require('body-parser');

app.route('/api/getShellTypes').get(getShellTypes);

app.route('/api/getProteinTypes').get(getProteinTypes);

app.route('/api/getToppingTypes').get(getToppingTypes);

app.route('/api/recipe').post(createRecipe);

app.route('/api/recipe/:id').put(saveRecipe);

app.route('/api/recipe/:id').delete(deleteRecipe);

app.use(bodyParser.json());
app.route('/api/recipes').post((req, res) => {
  res.send(req.body);
});

const httpServer: any = app.listen(9000, () => {
  console.log(
    'HTTP REST API Server running at http://localhost:' +
      httpServer.address().port
  );
});

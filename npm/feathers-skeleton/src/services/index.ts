
// Configure the Feathers services. (Can be re-generated.)
import { App } from '../app.interface';
import g1 from './g1/g1.service';
import users from './users/users.service';

import graphql from './graphql/graphql.service';
// !code: imports // !end
// !code: init // !end

// tslint:disable-next-line:no-unused-variable
let moduleExports = function (app: App) {
  app.configure(g1);
  app.configure(users);

  app.configure(graphql);
  // !code: func_return // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end

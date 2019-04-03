
// Hooks for service `g1`. (Can be re-generated.)
import * as commonHooks from 'feathers-hooks-common';
import { HooksObject } from '@feathersjs/feathers';
// tslint:disable-next-line:no-unused-variable
import h1 from './hooks/h1';
// tslint:disable-next-line:no-unused-variable
import g1Populate from './g1.populate';
// !code: imports // !end

// !<DEFAULT> code: used
// tslint:disable-next-line:no-unused-variable
const { iff } = commonHooks;
import validate from './g1.validate';
// tslint:disable-next-line:no-unused-variable
const { create, update, patch, validateCreate, validateUpdate, validatePatch } = validate;
// !end

// !code: init // !end

let moduleExports: HooksObject = {
  before: {
    // !<DEFAULT> code: before
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  after: {
    // !<DEFAULT> code: after
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  error: {
    // !<DEFAULT> code: error
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
    // !end
  },
  // !code: moduleExports // !end
};

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end

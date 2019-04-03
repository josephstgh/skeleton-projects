
/* tslint:disable no-unused-variable, indent */
// Define GraphQL resolvers using only Feathers services. (Can be re-generated.)
import { App } from '../../app.interface';
import { Paginated } from '@feathersjs/feathers';
import { FGraphQLResolverMap } from 'feathers-hooks-common';
// !code: imports // !end
// !code: init // !end

export interface ServiceResolverOptions {
  convertArgsToFeathers: any;
  extractAllItems: any;
  extractFirstItem: any;
}

let moduleExports = function serviceResolvers(app: App, options: ServiceResolverOptions) {
  const {convertArgsToFeathers, extractAllItems, extractFirstItem} = options;
  // !<DEFAULT> code: extra_auth_props
  const convertArgs = convertArgsToFeathers([]);
  // !end

  // !<DEFAULT> code: services
  let g1 = app.service('/g1');
  let users = app.service('/users');
  // !end

  let returns: FGraphQLResolverMap = {

    G1: {
    },

    User: {
    },

    // !code: resolver_field_more // !end

    Query: {

      // !<DEFAULT> code: query-G1
      // getG1(query: JSON, params: JSON, key: JSON): G1
      getG1(parent, args, content, ast) {
        const feathersParams = convertArgs(args, content, ast);
        return g1.get(args.key, feathersParams).then(extractFirstItem);
      },

      // findG1(query: JSON, params: JSON): [G1!]
      findG1(parent, args, content, ast) {
        const feathersParams = convertArgs(args, content, ast, { query: { $sort: {   _id: 1 } } });
        return g1.find(feathersParams).then(paginate(content)).then(extractAllItems);
      },
      // !end

      // !<DEFAULT> code: query-User
      // getUser(query: JSON, params: JSON, key: JSON): User
      getUser(parent, args, content, ast) {
        const feathersParams = convertArgs(args, content, ast);
        return users.get(args.key, feathersParams).then(extractFirstItem);
      },

      // findUser(query: JSON, params: JSON): [User!]
      findUser(parent, args, content, ast) {
        const feathersParams = convertArgs(args, content, ast, { query: { $sort: {   _id: 1 } } });
        return users.find(feathersParams).then(paginate(content)).then(extractAllItems);
      },
      // !end
      // !code: resolver_query_more // !end
    },
  };

  // !code: func_return // !end
  return returns;
};

// !code: more // !end

// !code: exports // !end
export default moduleExports;

function paginate(content: any) {
  return (result: any[] | Paginated<any>) => {
    content.pagination = !isPaginated(result) ? undefined : {
      total: result.total,
      limit: result.limit,
      skip: result.skip,
    };

    return result;
  };
}

function isPaginated<T>(it: T[] | Paginated<T>): it is Paginated<T> {
  return !!(it as any).data;
}
// !code: funcs // !end
// !code: end // !end

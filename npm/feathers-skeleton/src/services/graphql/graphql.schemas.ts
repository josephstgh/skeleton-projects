
// tslint:disable:no-trailing-whitespace
// Define the combined GraphQL schema. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = `
type G1 {
  
}
 
type User {
  
}
 

type Query {
  getG1(key: JSON, query: JSON, params: JSON): G1
  findG1(query: JSON, params: JSON): [G1]!
  getUser(key: JSON, query: JSON, params: JSON): User
  findUser(query: JSON, params: JSON): [User]!
}
`;

// !code: exports // !end
export default moduleExports;

// !code: funcs // !end
// !code: end // !end

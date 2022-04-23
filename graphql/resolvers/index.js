import { ownerQueries, ownerMutations, ownerFields } from './owner';
import { carQueries, carMutations, carFields } from './car';
import { userQueries, userMutations, userFields } from './user';

const resolvers = {
  Query: {
    ...ownerQueries,
    ...carQueries,
    ...userQueries,
  },
  Mutation: {
    ...ownerMutations,
    ...carMutations,
    ...userMutations,
  },
  ...ownerFields,
  ...carFields,
  ...userFields

};

export default resolvers;
import { ownerQueries, ownerMutations } from './owner';
import { carQueries, carMutations } from './car';
import { userQueries, userMutations } from './user';

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
};

export default resolvers;
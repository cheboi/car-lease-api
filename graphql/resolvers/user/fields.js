import { Owner, WorksAt } from '../../../db/models';

const userFields = {
  User: {
    owners: async (user, _, { loaders }) => {
      const worksAt = await WorksAt.find({ user: user.id });

      return loaders.owner.many(worksAt.map(({ owner}) => author));
    },
  },
};
export default userFields;
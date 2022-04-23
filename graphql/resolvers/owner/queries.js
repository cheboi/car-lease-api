import {Owner} from '../../../db/models';

const ownerQueries = {
    owners: async (_, args) => {
      const owners = await Owner.find();

      return owners
    },
    owner: async (_, args) => {
      const owner = await Owner.findById(id);

      return owner;
    },
  };
  
  export default ownerQueries;
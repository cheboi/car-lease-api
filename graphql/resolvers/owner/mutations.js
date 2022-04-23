import { Owner, WorksAt } from "../../../db/models";
import owner from "../../../db/models/owner";

const ownerMutations = {
    createOwner: async (_, {owner}) => {
      const newOwner = new Owner(owner);

      return newOwner.save();
    },
    updateOwner: async (_, {id, owner}) => {
      const updatedOwner = await Owner.findByIdAndUpdate(id, 
        {
          $set: {...owner},
        },
        {new: true});

      return updatedOwner;
    },
    
  };
  
  export default ownerMutations;
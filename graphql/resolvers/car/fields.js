const carFields = {
    Car: {
      author: async (car, _, { loaders }) => loaders.car.one(car.owner),
    },
  };
  export default carFields;
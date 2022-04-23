import { Car } from "../../../db/models";

const carMutations = {
    createBook: async (_, {car}) =>{
        const newCar = new Car(car);

        return newCar.save();
    },

    updateCar: async (_, {id, car}) => {
        const updatedCar = await car.findByIdAndUpdate(
            id,
            {
                $set: {...car}
            },
            {new: true}
        );
        return updatedCar
    }
}

export default carMutations;
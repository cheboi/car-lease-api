import { Schema, model } from 'mongoose';

const OwnerSchema = new Schema(
  {
    id:{type: Number,require: true},
    phono_number: { type:String, require: true},
    first_name: { type: String, required: true },
    first_name: { type: String, required: true },
    email: { type: String, required: true },
    car:[Car]
  },
  {
    timestamps: true,
  }
);

export default model('Author', OwnerSchema);
import { Schema, model } from 'mongoose';

const CarSchema = new Schema(
  {
    name: { type: String, required: true },
    name: { type: String, required: true },
    name: { type: String, required: true },
    name: { type: String, required: true },
    Owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true },
  },
  {
    timestamps: true,
  }
);

export default model('Book', CarSchema);
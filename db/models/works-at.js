import { Schema, model } from 'mongoose';

const WorksAtSchema = new Schema(
  {
    owner: { type: Schema.Types.ObjectId, ref: 'Owner', required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  {
    timestamps: true,
  }
);

export default model('WorksAt', WorksAtSchema);
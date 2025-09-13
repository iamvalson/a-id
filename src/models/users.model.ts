import { User } from '@/interfaces/users.interface';
import { model, Schema, Document } from 'mongoose';

const locationSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
    default: 'Point',
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const userSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    pastHealthIssues: {
      type: [String],
      required: false,
    },
    location: {
      type: locationSchema,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = model<User & Document>('User', userSchema);

export default userModel;

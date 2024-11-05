import { model, Schema, Document, Types } from 'mongoose';
import Role from './Role';

export default interface User extends Document {
  firstname: string;
  lastname: string;
  name: string;
  tel: number;
  password: string;
  role: Role;
  verified: boolean;
  enabled: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema(
  {
    firstname: {
      type: Schema.Types.String,
      required: true,
      maxlength: 50,
    },
    lastname: {
      type: Schema.Types.String,
      required: true,
      maxlength: 50,
    },
    name: {
      type: Schema.Types.String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    password: {
      type: Schema.Types.String,
      select: false,
    },
    role: {
      type: Schema.Types.ObjectId,
      ref: 'Role',
      required: true,
      select: false,
      index: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      required: true
    },
    updatedAt: {
      type: Date,
      default: Date.now,
      required: true
    },
  },
  {
    versionKey: false,
  },
);


const DOCUMENT_NAME = 'User';
const COLLECTION_NAME = 'users';


export const UserModel = model<User>(DOCUMENT_NAME, schema, COLLECTION_NAME);

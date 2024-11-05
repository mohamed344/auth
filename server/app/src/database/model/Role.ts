import { Schema, model, Document } from 'mongoose';


export enum RoleCode {
  User = 'User',
  ADMIN = 'ADMIN',
}

export default interface Role extends Document {
  code: RoleCode;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const schema = new Schema(
  {
    code: {
      type: RoleCode,
      required: true,
      default: RoleCode.User,
      enum: [RoleCode.ADMIN, RoleCode.User],
    },
    status: {
      type: Schema.Types.Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      required: true,
      select: false,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  },
);


const DOCUMENT_NAME = 'Role';
const COLLECTION_NAME = 'roles';

export const RoleModel = model<Role>(DOCUMENT_NAME, schema, COLLECTION_NAME);
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Model } from 'mongoose';

@Schema({
  collection: 'user',
})
export class UserEntity {
  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  email: string;
}

export type UserDocument = UserEntity & Document;
export const UserSchema = SchemaFactory.createForClass(UserEntity);
export type UserModel = Model<UserDocument>;
import mongoose, { Document, Schema,  Model, model } from 'mongoose';

interface IClient extends Document {
  _id: string;
  userName: string;
  email: string;
  special_price: string[];
}

const clientSchema: Schema<IClient> = new Schema({
  userName: {type: String,unique: true,required: true,},
  email: {type: String,unique: true,required: true,},
  special_price: {
    type: [String],
    required: true,       
  }
});

const Client: Model<IClient> = model<IClient>('user', clientSchema);
export { Client, IClient };
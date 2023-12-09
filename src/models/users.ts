import mongoose, { Document, Schema,  Model, model } from 'mongoose';

interface IClient extends Document {
  _id: string;
  userName: string;
  email: string;
  special_price : Schema.Types.ObjectId[];
  
}

const clientSchema: Schema<IClient> = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  special_price: {
    type: [
        {
            type: Schema.Types.ObjectId,
            ref: "Brands"
        }
    ]        
}
});

const Client: Model<IClient> = model<IClient>('user', clientSchema);
export { Client, IClient };
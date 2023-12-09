import { Document, Schema, Model, model } from 'mongoose';

interface IProduct extends Document {
  _id: string;
  name: string;
  inStock: boolean;
  price: number;
  brand: string;
  special_price: number;
  __v: number;
}

const ProductSchema: Schema = new Schema({
  _id : { type: String, required: true },
  name: { type: String, required: true },
  inStock: { type: Boolean, default: true },
  price: { type: Number, required: true },
  brand:{ type: String, required: true },
  special_price: { type: Number, required: true },
});

const Product: Model<IProduct> = model<IProduct>('Product', ProductSchema);

export { Product, IProduct };


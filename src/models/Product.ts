import { Document, Schema, Model, model } from 'mongoose';

interface IProduct extends Document {
  name: string;
  brand: Schema.Types.ObjectId;
  basePrice: number;
  specialPrice: number;
  inStock: boolean;
  quantity: number;
}

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true },
  brand: { type: Schema.Types.ObjectId, ref: 'Brand' },
  basePrice: { type: Number, required: true },
  specialPrice: { type: Number, required: true },
  inStock: { type: Boolean, default: true },
  quantity: { type: Number, default: 0 },
});

const Product: Model<IProduct> = model<IProduct>('Product', ProductSchema);

export { Product, IProduct };


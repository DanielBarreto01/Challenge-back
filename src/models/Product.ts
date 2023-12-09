import { Document, Schema, Model, model } from 'mongoose';

interface IProduct extends Document {
  productModel: string;
  brand: string;
  stock: boolean;
  units: number;
  price: number;
  special_price: number;
}

const productSchema = new Schema<IProduct>({
  productModel: String,
  brand: String,
  stock: { type: Boolean, default: true },
  units: { type: Number, default: 0 },
  price: Number,
  special_price: Number,
});

const Product: Model<IProduct> = model<IProduct>('Product', productSchema);

export { Product, IProduct };


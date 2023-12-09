import { Document, Schema, Model, model } from 'mongoose';

interface IBrand extends Document {
    name: string;
}


const IBrand: Schema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
});

const Brand: Model<IBrand> = model<IBrand>('Brands', IBrand);

export { Brand, IBrand };


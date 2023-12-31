import { Request, Response } from 'express';
import { Product, IProduct } from '../models/Product';

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find({stock: { $gt: 0 } });
    res.json({ products });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: 'Error al obtener los productos' });
  }
};

export { getProducts };


import { Request, Response } from 'express';
import { Product, IProduct } from '../models/Product';

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const products: IProduct[] = await Product.find({ inStock: true });
    res.json({ products });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener los productos' });
  }
};

const createProduct = async (req: Request, res: Response): Promise<void> => {
  // Implementa la lógica para crear un producto
};

export { getProducts, createProduct };


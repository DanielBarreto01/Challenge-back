import { Request, Response } from 'express';
import { Product, IProduct } from '../models/Product';
import { Client, IClient } from '../models/users';
import { Brand,IBrand } from '../models/Brand';

const getPrice = async (req: Request, res: Response): Promise<void> => {
  try {
    const client: IClient | null = await Client.findById(req.params.user_id);
    const product: IProduct | null = await Product.findOne({ name: req.params.nombre_producto });
    
    if (!client || !product) {
      res.status(404).json({ message: 'Cliente o producto no encontrado' });
      return;
    }
    console.log("1");
    let finalPrice = product.price;
    console.log(finalPrice);

  if (client.special_price && client.special_price.map(String).includes(product.brand)) {
    console.log("2");
    finalPrice = product.special_price;
  }

  
  res.json({ finalPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error de servicio' });
  }
};



//necesti obtener los ususraios
const getClients = async (req: Request, res: Response): Promise<void> => {
  try {
    const clients: IClient[] = await Client.find();
    res.status(200).json({ clients });
  } catch (error) {
    throw error;
  }
}

const getBrands = async (req: Request, res: Response): Promise<void> => {
  try {
    const brands: IBrand[] = await Brand.find();
    res.status(200).json({ brands });
  } catch (error) {
    throw error;
  }
}

export { getClients , getPrice , getBrands};
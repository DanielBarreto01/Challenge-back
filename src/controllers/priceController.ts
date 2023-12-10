import { Request, Response, json } from 'express';
import { Product, IProduct } from '../models/Product';
import { Client, IClient } from '../models/users';
import { Brand, IBrand } from '../models/Brand';



const getPrice = async (req: Request, res: Response): Promise<void> => {
  try {
    const { user_id, product_brand } = req.params;
    const user: IClient | null = await Client.findById(user_id).populate('special_price');
    const products = await Product.find({ brand: { $regex: new RegExp(`^${product_brand}$`, "i") }, stock: { $ne: 0 } });
    console.log(user);
    console.log(products);

    if (!user || !products.length) {
      res.status(404).json({ message: 'Usuario o productos no encontrados' });
      return;
    }
    console.log(user.special_price);
   
    const hasSpecialPrice = user && user.special_price 
    ? user.special_price.some((item: any) => item && item.toLowerCase() === product_brand.toLowerCase()) 
    : false;
    console.log(hasSpecialPrice);
    if(!hasSpecialPrice){
      res.json({
        products: products.map(prod => {
          return {
            name: `${prod.brand} - ${prod.name}`,
            price: prod.price
          }
        })
      });
    } else {
      res.json({
        products: products.map(prod => {
          const hasSpecialPrice = user.special_price && user.special_price.some((item: any) => item.toLowerCase() === prod.brand.toLowerCase());
          return {
            name: prod.name,
            Brand: prod.brand,
            special_price: hasSpecialPrice ? prod.special_price : prod.price
          }
        })
      })
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error de servicio' });
  }
};
//obtener los ususraios
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

export { getClients, getPrice, getBrands };
import express from 'express';
import { Router } from 'express';
import { getProducts } from '../controllers/productsController';
import { getClients } from '../controllers/priceController';
import { getPrice } from '../controllers/priceController';
import { getBrands } from '../controllers/priceController';


const router: Router = express.Router();

router.get('/products', getProducts);
router.get('/clients', getClients);
router.get('/:user_id/:model', getPrice);
router.get('/brands', getBrands);
export default router;

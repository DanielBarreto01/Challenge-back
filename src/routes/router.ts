import express from 'express';
import { Router } from 'express';
import { getProducts } from '../controllers/productsController';
import { getSpecialPrices } from '../controllers/priceController';

const router: Router = express.Router();

router.get('/products', getProducts),
router.get('/specialPrices', getSpecialPrices);

export default router;

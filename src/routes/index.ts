import express from 'express';
import { Router } from 'express';
import { getProducts } from '../controllers/productsController';

const router: Router = express.Router();

router.get('/products', getProducts);

export default router;

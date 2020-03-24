import { Router } from "express";
import Server from './Models/server.json';
import ProductController from './Controllers/ProductController';
import StockController from './Controllers/StockController';
const routes = Router();


routes.get('/', (req, res) => {
  return res.json(Server);
});

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);

routes.get('/amount', StockController.index);
routes.get('/amount/:id', StockController.show);

export default routes;
import { Router } from 'express';

import productsController from '../controllers/productsController';

class ProductsRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', productsController.list);
    this.router.post('/', productsController.create);
    this.router.delete('/:id', productsController.delete);
    this.router.get('/:id', productsController.show);
    this.router.get('/search/:name', productsController.search);
    this.router.put('/:id', productsController.update);
  }
}

const productsRoutes = new ProductsRoutes();
export default productsRoutes.router;
import { Request, Response } from 'express';

class IndexController {
  index (req: Request, res: Response) {
    res.json({ 
      products: 'API for products is /api/products',
      users: 'API for users is /api/users',
    })
  }
}

export const indexController = new IndexController();
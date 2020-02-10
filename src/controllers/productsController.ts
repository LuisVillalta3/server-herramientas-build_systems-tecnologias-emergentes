import { Request, Response } from 'express';

import pool from '../database';

class ProductsController {
  public async list (req: Request, res: Response): Promise<void> {
    const products = await pool.query('SELECT * FROM products');
    res.json(products);
  }

  public async create (req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO products SET ?', [req.body])
    res.json({ message: 'Product saved'});
  }

  public async delete (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM products where id = ?', [id]);
    res.json({ message: "The product was deleted"});
  }

  public async update (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('UPDATE products set ? where id = ?', [req.body, id]);
    res.json({ message: "The product was updated"});
  }

  public async search (req: Request, res: Response): Promise<void> {
    const { name } = req.params;
    const products = await pool.query('SELECT * FROM products where name = ?', [name]);
    res.json(products);
  }

  public async show (req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const product = await pool.query('SELECT * FROM products where id = ?', [id]);
    if (product.length > 0) { return res.json(product[0]); }
    res.status(404).json({ message: "The product doesn't exits"});
  }
}

const productsController = new ProductsController();
export default productsController;
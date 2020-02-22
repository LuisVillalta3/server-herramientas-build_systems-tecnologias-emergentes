import { Request, Response } from 'express';

import pool from '../database';

class SearchController {
  public async search (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const name = `%${id}%`;
    const products = await pool.query('SELECT * FROM products where name like ?', [name]);
    res.json(products);
  }
}

const searchController = new SearchController();
export default searchController;
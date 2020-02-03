import { Request, Response } from 'express';

import pool from '../database';

class UsersController {
  public async list (req: Request, res: Response): Promise<void> {
    const users = await pool.query('SELECT * FROM users');
    res.json(users);
  }

  public async create (req: Request, res: Response): Promise<void> {
    await pool.query('INSERT INTO users SET ?', [req.body])
    res.json({ message: 'User saved'});
  }

  public async delete (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('DELETE FROM users where id = ?', [id]);
    res.json({ message: "The user was deleted"});
  }

  public async update (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    await pool.query('UPDATE users set ? where id = ?', [req.body, id]);
    res.json({ message: "The user was updated"});
  }

  public async show (req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const user = await pool.query('SELECT * FROM users where id = ?', [id]);
    if (user.length > 0) { return res.json(user[0]); }
    res.status(404).json({ message: "The user doesn't exits"});
  }
}

const usersController = new UsersController();
export default usersController;
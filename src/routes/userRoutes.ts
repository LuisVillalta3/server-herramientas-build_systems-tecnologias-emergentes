import { Router } from 'express';

import usersController from '../controllers/usersController';

class UsersRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', usersController.list);
    this.router.post('/', usersController.create);
    this.router.delete('/:id', usersController.delete);
    this.router.get('/:id', usersController.show);
    this.router.get('/login/:email', usersController.login);
    this.router.put('/:id', usersController.update);
  }
}

const usersRoutes = new UsersRoutes();
export default usersRoutes.router;
import { Router } from 'express';

import searchController from '../controllers/searchController';

class SearchRoutes {
  public router: Router = Router();
  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/:id', searchController.search);
  }
}

const searchRoutes = new SearchRoutes();
export default searchRoutes.router;
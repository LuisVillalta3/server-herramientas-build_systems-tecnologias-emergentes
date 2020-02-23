import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import indexRoutes from './routes/indexRoutes';
import productRoutes from './routes/productRoutes';
import searchRoute from './routes/searchRoute';
import userRoutes from './routes/userRoutes';

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    this.app.set('port', process.env.PORT || 5000);
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.static(path.join(__dirname,'public')));
  }

  routes(): void {
    this.app.use('/', indexRoutes);
    this.app.use('/api/users', userRoutes);
    this.app.use('/api/products', productRoutes);
    this.app.use('/api/search', searchRoute);
    this.app.use(express.static('public/images'));
  }

  start(): void {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server on port`, this.app.get('port'));
    });
  }

}

const server = new Server();
server.start();
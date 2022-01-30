import * as express from 'express';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import { createConnection } from 'typeorm';
import userRouter from './routes/users';
import playerRouter from './routes/players';
import employeeRouter from './routes/employees';
import categoriesRouter from "./routes/categories"
import productsRouter from "./routes/product"
import './services/passport';

import * as dotenv from 'dotenv';
dotenv.config();

createConnection().then((connection) => {
  const app: Application = express();
  app.use(bodyParser.json());

  app.use('/users', userRouter);
  app.use('/players', playerRouter);
  app.use('/employees', employeeRouter)
  app.use('/categories', categoriesRouter)
  app.use('/products', productsRouter)

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`🔥🔥 Server is listening on port ${PORT} 🔥🔥🔥`);
  });
});

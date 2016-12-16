 /**
  * Module dependencies
  */


 /**
  * Packages
  */

 import path from 'path';
 import express from 'express';


 /**
  * Assets
  */

/* eslint-disable no-unused-vars */
 import env from '../env';
 import middlewares from './middlewares';
 import routes from './routes';

 /**
  * Create express server
  */

 const app = express();


 /**
  * Static Files
  */

 app.use('/public', express.static(path.join(__dirname, process.env.PUBLIC_DIR), { maxAge: 31557600000 }));

 /**
  * Set View Engine
  */

 app.set('views', path.resolve(process.env.VIEWS_DIR));
 app.set('view engine', process.env.VIEW_ENGINE);


 /**
  * Middlewares
  */

 middlewares(app);

 /**
  * Routes
  */

 routes(app);

 /**
  * Export app
  */

 export default app;


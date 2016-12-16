 /**
  * Module Dependencies
  */


 import env from '../../env'; // eslint-disable-line no-unused-vars

 export default function home(req, res) {
   res.render('home', {
     title: process.env.APP_TITLE,
   });
 }

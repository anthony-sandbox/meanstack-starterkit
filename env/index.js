/**
 * Model dependencies
 */
 
 import dotenv from 'dotenv';
 
 
 /**
  * default variables regardless of the enviornment
  */
 
 dotenv.config({"path": "./env/.env"});
 
 /**
  * Load environment variables based on node enviornment
  */
  
  const env = process.env.NODE_ENV;
  
  if(env === 'production'){
      dotenv.config({"path": "./env/.env-prod"});
  } else if(env === 'development') {
      dotenv.config({"path": "./env/.env-dev"});
  }
  
  export default env;
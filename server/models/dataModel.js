import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();
const myURI = process.env.DB_URI;

const pool = new Pool({
  connectionString: myURI
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
export default {
  query: (text, params) => {
    console.log('executed query', text);
    return pool.query(text, params);
  }
};

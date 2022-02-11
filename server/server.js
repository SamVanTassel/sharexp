import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// import dotenv from 'dotenv';
// dotenv.config();

import companiesRouter from './routes/companies.js';
import globalRouter from './routes/global.js'
import usersRouter from './routes/users.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 8080;
app.use(express.static(path.resolve(__dirname, '../client/static/')))

// middleware to show us request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../index.html'));
});

app.use('/api/', globalRouter);
app.use('/api/companies', companiesRouter);
app.use('/api/users', usersRouter);

// route gets for other pages to index, to load JS and allow react-router to take over
// app.get('/*', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../index.html'));
// });

// route all other calls to 404 error handler
app.use((req, res) => res.status(404).json('Endpoint could not be found'));

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: `A default server error occurred: ${err}`,
    status: 500,
    message: { err: 'Default server error' },
  };
  console.log(defaultErr.log);
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

// listening on port 
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
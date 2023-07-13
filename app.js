import express from 'express';
import conectDb from './models/connection.js';
import rotas from './routes.js';

const app = express();

app.use(express.json())
app.use(rotas);

conectDb(app);

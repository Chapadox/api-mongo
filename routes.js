import express from 'express';
import personControl from './controllers/personControler.js';

const router = express.Router();

router.get('/', (_req, res) => {
  res.status(200).json({message: 'Hello Mongo'});
});

router.post('/person', personControl.addPerson);

router.get('/person', personControl.getAllPerson);

router.delete('/person/:id', personControl.deletePerson);

router.patch('/person/:id', personControl.updatePerson);

export default router


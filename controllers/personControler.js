import persondb from '../models/person.js';

async function addPerson(req, res) {
  const { name, salary, approved } = req.body;

  const person = {
    name,
    salary,
    approved,
  }

  try {
    await persondb.create(person);
    res.status(201).json({messagem: "Usuario adicionado"});
  } catch (err) {
    res.status(500).json({err: err})
  }
}

async function getAllPerson(_req, res) {
  try {
    const person = await persondb.find();

    res.status(200).json({person});
  } catch (err) {
    res.status(500).json({err: err});
  }
}

export default {
  addPerson: addPerson,
  getAllPerson: getAllPerson
}


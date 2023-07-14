import persondb from '../models/person.js';

async function addPerson(req, res) {
  const { name, salary, approved } = req.body;

  const person = {
    name,
    salary,
    approved,
  };

  try {
    await persondb.create(person);
    res.status(201).json({messagem: "Usuario adicionado"});
  } catch (err) {
    res.status(500).json({err: err});
  }
};

async function getAllPerson(_req, res) {
  try {
    const person = await persondb.find();

    res.status(200).json({person});
  } catch (err) {
    res.status(500).json({err: err});
  }
};

async function deletePerson (req, res) {
 const id = req.params.id;
  
  const person = await persondb.findOne({_id: id});
    
  if(!person) return res.status(422).json({message: 'Usuario não encontrado'});

  try {
    await persondb.deleteOne(person);
    res.status(200).json({message: 'Usuario deletado'});

  } catch (err) {
    res.status(500).json({message: `Falha ao deletar ${err}`});
  }
};

async function updatePerson (req, res) {
  const id = req.params.id;
  const { name, salary, approved } = req.body;
  
  const person = {
    name,
    salary,
    approved,
  };
  
  try {
  const updatedPerson = await persondb.updateOne({_id: id}, person);
  if (updatedPerson.matchedCount === 0) return res.status(422).json({message: 'Usuario não encontrado'});

  res.status(200).json({message: `Usuario atualizado ${person}`});
  } catch(err) {
  res.status(500).json({err: err});
  } 
};

export default {
  addPerson: addPerson,
  getAllPerson: getAllPerson,
  deletePerson: deletePerson,
  updatePerson: updatePerson
};


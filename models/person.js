import mongoose from 'mongoose';

const person = mongoose.model('Person', { 
  name: String,
  salary: Number,
  approved: Boolean
});

export default person

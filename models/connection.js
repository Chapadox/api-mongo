import mongoose from 'mongoose';
import dot from 'dotenv';
dot.config();

function mongoConect (app) {
  mongoose.connect(process.env.DBURL)
    .then(() => {
      console.log('LOG: Banco Conectado.');
      app.listen(3000);
    })
    .catch ((err) => console.log(`Erro ao conectar ao banco de dados ${err}`));
}

export default mongoConect

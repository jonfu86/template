const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/{database_name_here}', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Mongoose is connected to server!');
});




const fetch = (id) => Product.findOne({ id });

module.exports = {

};

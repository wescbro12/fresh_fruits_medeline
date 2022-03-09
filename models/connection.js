require('.env').config();
const mongoose = require('mongoose');

/////////////////////////
//DATABASE CONNECTIONS//
///////////////////////

const DATABASE_URL = process.env.DATABASE_URL;
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//Establish

mongoose.connect( DATABASE_URL, CONFIG );

mongoose.connection
    .on('open', () => console.log('Mongo is in the building'))
    .on('close', () => console.log('Mongo has left the building'))
    .on('error', (error) => console.log(error))

module.exports = mongoose;
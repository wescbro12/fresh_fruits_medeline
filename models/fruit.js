const mongoose = require('./connection') // from the connection file

const { Schema, model } = mongoose;

const fruitSchema = new Schema({
    name: String,
    color: String,
    readyToEat: Boolean
})

const Fruit = model('Fruit', fruitSchema);

module.exports = Fruit;
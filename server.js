///////////////////////////////
// Import Our Dependencies////
////////////////////////////

require("dotenv").config(); //Load ENV Variables into process.env
const express = require("express"); // Import express
const morgan = require("morgan"); // Import morgan
const methodOverride = require("method-override");
// const mongoose = require("./models/connection");
const Fruit = require('./models/fruit')
const fruitController = require('./controllers/fruits')
const path = require("path"); // built in node module we use to resolve paths



///////////////////////////
// Database Connection////
/////////////////////////

// Setup inputs for our connect function

// const DATABASE_URL = process.env.DATABASE_URL; //This is the url that is set in the .env file for your database

// const CONFIG = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// };

// //Establish Connection
// mongoose.connect(DATABASE_URL, CONFIG); // this is where we connect to our database

// // Events fpr when connection opens/disconnects/erros
// mongoose.connection
//     .on("open", () => console.log("connect to Mongoose"))
//     .on("close", () => console.log("Disconnected from Mongoose"))
//     .on("error", (error) => console.log(error)); //if you don't place a ';' till you get to the end.

/////////////////
// Our Models///
///////////////

// pull schema and model from mongoose using object destructuring

// const { Schema, model } = mongoose; /*shorthand for : const Schema = mongoose.Schema; 
// const model = mongoose.model;
// */

// //make "fruits" schema
// const fruitSchema = new Schema({
//     name: String,
//     color: String,
//     readyToEat: Boolean
// })

// //make the "fruit" model
// const Fruit = model("Fruit", fruitSchema)

///////////////////////
////App Object Setup///
///////////////////////
// app object- use to invoke express 
const app = express()
app.engine('jsx', require('express-react-views').createEngine());// able to use jsx views
app.set('view engine', 'jsx');//


///////////////
//Middleware//
//////////////

// runs between the requests and the callback functions

app.use(morgan("tiny")); //logging
app.use(express.urlencoded({ extended: true })); //parse urlencoded request bodies
app.use(methodOverride("_method"));// override for put and delete requests from forms
app.use(express.static("public")); // serve files from pubic statically

////////////
//ROUTES///
///////////
app.use('/fruits', fruitController)
app.get('/', (req, res) => {
    res.send("Is your server running?")
});

////////////
//SEEDING//
//////////

// seeding is sample or starter data to make sure your routes are working

// app.get('/fruits/seed', (req, res) => {
//     const startFruits = [
//         { name: "Orange", color: "orange", readyToEat: false },
//         { name: "Grape", color: "purple", readyToEat: false },
//         { name: "Banana", color: "orange", readyToEat: false },
//         { name: "Strawberry", color: "red", readyToEat: false },
//         { name: "Coconut", color: "brown", readyToEat: false },
//     ]
//     //Delete all fruits
//     Fruit.deleteMany({}).then((data) => {
//         Fruit.create(startFruits).then((data) => {
//             res.json(data)//think about this for the unit project
//         })
//     }).catch((err) => {
//         res.status(400).send(err)
//     })
// })

// ///////////////
// ////INDEX/////
// /////////////
// app.get('/fruits', (req, res) => {
//     Fruit.find({})
//         .then((fruits) => {
//             res.render('fruits/Index', { fruits })
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//         })
// })


// ///////////////
// ////NEW/////
// /////////////
// app.get('/fruits/new', (req, res) => {
//     res.render('fruits/New')
// })
// ///////////////
// ////DELETE////
// //////////////
// app.delete('/fruits/:id', (req, res) => {
//     const { id } = req.params; // same as const id = req.params.id
//     Fruit.findByIdAndDelete(id)
//         .then(() => {
//         res.redirect('/fruits')
//         })
//         .catch((error) => {
//         res.status(400).json({error})
//     })
// })

// ///////////////
// ////UPDATE////
// /////////////

// app.put('/fruits/:id', (req, res) => {
//     const { id } = req.params;
//     req.body.readyToEat= req.body.readyToEat ==='on'? true : false
//     Fruit.findByIdAndUpdate(id, req.body, { new: true })
//         .then(() => {
//         res.redirect(`/fruits/${id}`)
//         })
//         .catch((error) => {
//         res.status(400).json({error})
//     })
// })

// ///////////////
// ///CREATE/////
// /////////////
// app.post('/fruits', (req, res) => {
//     req.body.readyToEat = req.body.readyToEat === 'on' ? true : false
    
//     Fruit.create(req.body) 
//         .then((createdFruit) => {
//             res.redirect(`/fruits/${createdFruit._id}`)
//         })
//         .catch((error) => {
//         res.status(400).json({error})
//     })
    
// })

// ///////////////
// ////EDIT/////
// /////////////

// // mix between the Show and New routes

// app.get('/fruits/:id/edit', (req, res) => {
//     const { id } = req.params;
//     Fruit.findById(id)
//         .then((fruit) => {
//         res.render('fruits/Edit', {fruit})
//         })
//         .catch((error) => {
//         res.status(400).json({error})
//     })
// })


// ///////////////
// ////SHOW/////
// /////////////
// app.get('/fruits/:id', (req, res) => {
//     const { id } = req.params //object destructure varialbe for req.params
//     Fruit.findById(id)
//         .then((fruit) => {
//             res.render('fruits/Show',
//                 { fruit })
//         })
//         .catch((error) => {
//             res.status(400).json({ error })
//     })
   
// })

//////////////////////
//Server Listener
/////////////////////

const PORT = process.env.PORT; // 
app.listen(PORT, () => console.log(`Live from ${PORT}`)); //



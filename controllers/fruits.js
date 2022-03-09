//only RESTful routes go in the controller file


////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////

const express = require('express');
const Fruit = require('../models/fruit')


/////////////////////////////////////////
// Create Route
/////////////////////////////////////////

const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////


///Seed Route///
router.get('/seed', (req, res) => {
    const startFruits = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false },
    ]
    //Delete all fruits
    Fruit.deleteMany({}).then((data) => {
        Fruit.create(startFruits).then((data) => {
            res.json(data)//think about this for the unit project
        })
    }).catch((err) => {
        res.status(400).send(err)
    })
})

///////////////
////INDEX/////
/////////////
router.get('/', (req, res) => {
    Fruit.find({})
        .then((fruits) => {
            res.render('fruits/Index', { fruits })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


///////////////
////NEW/////
/////////////
router.get('/new', (req, res) => {
    res.render('fruits/New')
})
///////////////
////DELETE////
//////////////
router.delete('/:id', (req, res) => {
    const { id } = req.params; // same as const id = req.params.id
    Fruit.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/fruits')
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

///////////////
////UPDATE////
/////////////

router.put('/:id', (req, res) => {
    const { id } = req.params;
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false
    Fruit.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/fruits/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

///////////////
///CREATE/////
/////////////
router.post('/', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false

    Fruit.create(req.body)
        .then((createdFruit) => {
            res.redirect(`/fruits/${createdFruit._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })

})

///////////////
////EDIT/////
/////////////

// mix between the Show and New routes

router.get('/:id/edit', (req, res) => {
    const { id } = req.params;
    Fruit.findById(id)
        .then((fruit) => {
            res.render('fruits/Edit', { fruit })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


///////////////
////SHOW/////
/////////////
router.get('/:id', (req, res) => {
    const { id } = req.params //object destructure varialbe for req.params
    Fruit.findById(id)
        .then((fruit) => {
            res.render('fruits/Show',
                { fruit })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })

})
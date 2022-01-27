const express = require('express')
const router = express.Router()
<<<<<<< HEAD

const Mages = [
    mageFlame = {
        _id: 1,
        name: "Mage O' Flame",
        element: "Fire",
        quote: "",
        image: "https://i.ibb.co/64LzfMQ/Flame-Mage.png",
    },
    mageBolt = {
        _id: 2,
        name: "Mage O' Bolt",
        element: "Lightning",
        quote: "",
        image: "https://i.ibb.co/72TQd3j/Bolt-Mage.png",
    },
    mageFrost = {
        _id: 3,
        name: "Mage O' Frost",
        element: "Ice",
        quote: "",
        image: "https://i.ibb.co/DVTHvCP/Frost-Mage.png",
    },
    mageEnigma = {
        _id: 4,
        name: "Mage O' Enigma",
        element: "Mystery",
        quote: "",
        image: "https://i.ibb.co/zFsHZXn/Enigma-Mage.png",
    }
]

//ROUTES
router.get('/', (req, res) => {
    res.render('mages/mages.ejs', { mage: Mages })
    Mages.find({}, (err, allMages) => {
        if (err) {
            res.send(err)
        } else {
            res.render('mages/mages.ejs', { mage: allMages })
=======
const Mage = require('../models/Mage')

// const Mages = [
//     mageFlame = {
//         name: "Mage O' Flame",
//         element: "Fire",
//         quote: "",
//         image: "https://i.ibb.co/64LzfMQ/Flame-Mage.png",
//     },
//     mageBolt = {
//         name: "Mage O' Bolt",
//         element: "Lightning",
//         quote: "",
//         image: "https://i.ibb.co/72TQd3j/Bolt-Mage.png",
//     },
//     mageFrost = {
//         name: "Mage O' Frost",
//         element: "Ice",
//         quote: "",
//         image: "https://i.ibb.co/DVTHvCP/Frost-Mage.png",
//     },
//     mageEnigma = {
//         name: "Mage O' Enigma",
//         element: "Mystery",
//         quote: "",
//         image: "https://i.ibb.co/zFsHZXn/Enigma-Mage.png",
//     }
// ]

//ROUTES

//seed
router.get('/3548magecreate6548', (req, res) => {

    
    Mage.deleteMany({}).then((response) => {
        Mage.insertMany([
        {
                    mageName: "Mage O' Flame",
                    element: "Fire",
                    image: "https://i.ibb.co/64LzfMQ/Flame-Mage.png",
                },
                 {
                    mageName: "Mage O' Bolt",
                    element: "Lightning",
                    image: "https://i.ibb.co/72TQd3j/Bolt-Mage.png",
                },
                 {
                    mageName: "Mage O' Frost",
                    element: "Ice",
                    image: "https://i.ibb.co/DVTHvCP/Frost-Mage.png",
                },
                 {
                    mageName: "Mage O' Enigma",
                    element: "Mystery",
                    image: "https://i.ibb.co/zFsHZXn/Enigma-Mage.png",
                }
    ]).then((response) => {
        console.log(`made ${response.length} mages`)
    })
    })
    
    res.redirect('/mages')
})

//index
router.get('/', (req, res) => {
    
    Mage.find({}, (err, allMages) => {
        if (err){
            res.send(err)
        } else {
            res.render('mages/mages.ejs', {mage: allMages})
>>>>>>> main
        }
    })
})

<<<<<<< HEAD
=======
//New
// router.get('/new', (req, res) => {
//     // res.send('New Potion Route')
//     // res.render('new.ejs')
//     res.render('potions/new.ejs')
// })
>>>>>>> main

//show
router.get('/:id', (req, res) => {
    Mages.findById(req.params.id, (err, foundMage) => {
        if (err) {
            res.send(err)
            
        } else {
            res.render('mages/show.ejs', { mage: foundMage })
        }
    })
})

//create
router.post('/', (req, res) => {
    Mage.create(req.body, (err, newMage) => {
        if (err) {
            res.send(err)
        } else {
            console.log(`mage created here: ${newMage}`)
            res.redirect('/mages')
        }
    })
})

//delete
router.delete('/:id', (req, res) => {
    Mage.findByIdAndDelete(req.params.id, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/mages')
        }
    })
})

//update

router.put('/:id', (req, res) => {
    res.send(`mage update: ${req.params.id}`)
})

module.exports = router
const express = require('express')
const router = express.Router()
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

//index
router.get('/', (req, res) => {
    
    Mage.find({}, (err, allMages) => {
        if (err){
            res.send(err)
        } else {
            res.render('mages/mages.ejs', {mage: allMages})
        }
    })
})

//New
// router.get('/new', (req, res) => {
//     // res.send('New Potion Route')
//     // res.render('new.ejs')
//     res.render('potions/new.ejs')
// })

//show
router.get('/:id', (req, res) => {
    Mage.findById(req.params.id, (err, foundMage) => {
        if(err) {
            res.send(err)
            
        } else {
            res.render('mages/show.ejs', {mage: foundMage})
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
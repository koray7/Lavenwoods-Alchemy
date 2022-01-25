const express = require('express')
const router = express.Router()
const Mages = [
    mageFlame = {
        name: "Mage O' Flame",
        element: "Fire",
        quote: "",
        image: "https://i.ibb.co/64LzfMQ/Flame-Mage.png",
    },
    mageBolt = {
        name: "Mage O' Bolt",
        element: "Lightning",
        quote: "",
        image: "http://127.0.0.1:8887/Bolt_Mage.png",
    },
    mageFrost = {
        name: "Mage O' Frost",
        element: "Ice",
        quote: "",
        image: "https://i.ibb.co/DVTHvCP/Frost-Mage.png",
    },
    mageEnigma = {
        name: "Mage O' Enigma",
        element: "Mystery",
        quote: "",
        image: "https://i.ibb.co/zFsHZXn/Enigma-Mage.png",
    }
]

//ROUTES

//index
router.get('/', (req, res) => {
    res.render('mages/mages.ejs', {mage: Mages})
    // Mage.find({}, (err, allMages) => {
    //     if (err){
    //         res.send(err)
    //     } else {
    //         res.render('mages/mages.ejs', {mage: allMages})
    //     }
    // })
})

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

module.exports = router
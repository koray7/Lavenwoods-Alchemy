const express = require('express')
const router = express.Router()
const Mages = {
    mageFlame: {
        name: "Mage O' Flame",
        element: "Fire",
        quote: "",
    },
    mageBolt: {
        name: "Mage O' Bolt",
        element: "Lightning",
        quote: ""
    },
    mageFrost: {
        name: "Mage O' Frost",
        element: "Ice",
        quote: "",
    },
    mageEnigma: {
        name: "Mage O' Enigma",
        element: "Mystery",
        quote: "",
    }
}

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
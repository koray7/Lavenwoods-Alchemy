const express = require('express')
const router = express.Router()
const Potion = require("../models/Potion")

//ROUTES

//index
router.get('/', (req, res) => {
    res.render('mages/mages.ejs')
})

//show
router.get('/:id', (req, res) => {
    Potion.findById(req.params.id, (err, foundMage) => {
        if(err) {
            res.send(err)
        } else {
            res.render('mages/show.ejs', {mage: foundMage})
        }
    })
})

module.exports = router
const express = require('express')
const router = express.Router()
const Mages = require('../models/Mage')

//ROUTES

//index
router.get('/', (req, res) => {
    res.render('mages/mages.ejs', {mage: Mages})
    Mages.find({}, (err, allMages) => {
        if (err){
            res.send(err)
        } else {
            res.render('mages/mages.ejs', {mage: allMages})
        }
    })
})

//show
router.get('/:id', (req, res) => {
    Mages.findById(req.params.id, (err, foundMages) => {
        if(err) {
            res.send(err)
        } else {
            res.render('mages/show.ejs', {mage: foundMages})
        }
    })
})

module.exports = router
const express = require('express')
const { Module } = require('module')
const router = express.Router()
const Potion = require('../models/Potion')

//ROUTING

//index
router.get('/', (req, res) => {
    Potion.find({}, (err, allPotions) => {
        if (err) {
            res.send(err)
        } else {
            res.render('potions/index.ejs', {potions: allPotions})
        }
    })
})

//New
router.get('/new', (req, res) => {
    res.render('potions/new.ejs')
})

//show
router.get('/:id', (req, res) => {
    Potion.findById(req.params.id, (err, foundPotion) => {
        if(err) {
            res.send(err)
        } else {
            res.render('potions/show.ejs', {potion: foundPotion})
        }
    })
})

//edit
router.get('/:id/edit', (req, res) => {
    res.send(`Edit route for ${req.params.id}`)
})


//create
router.post('/', (req, res) => {
    Potion.create(req.body, (err, newPotion) => {
        if (err) {
            res.send(err)
        } else {
            console.log(newPotion)
            res.redirect('/potions')
        }
    })
})

//delete
router.delete('/:id', (req, res) => {
    Potion.findByIdAndDelete(req.params.id, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/potions')
        }
    })
})

//update

router.put('/:id', (req, res) => {
    res.send(`Potion update: ${req.params.id}`)
})

module.exports = router
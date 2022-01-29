const express = require('express')
const router = express.Router()
const Mage = require('../models/Mage')

//ROUTES

//Mage Generation
router.get('/3548magecreate6548', (req, res) => {
    Mage.deleteMany({}).then((response) => {
        Mage.insertMany([
            {
                mageName: "Mage O' Flame",
                element: "Fire",
                image: "https://i.ibb.co/64LzfMQ/Flame-Mage.png",
                ingredients: [
                    {
                        ingredientName: "Magma Dust",
                        effect: "Ignites the inner fire",
                    },
                    {
                        ingredientName: "Candle Wax",
                        effect: "Adds fuel to the inner fire",
                    },
                    {
                        ingredientName: "Butane",
                        effect: "Makes fire.  Nobody knows where though.",
                    },
                    {
                        ingredientName: "Sulfur",
                        effect: "Causes smelly flame",
                    },

                ],
                _id: "61f330c3d78647941020d715",
            },
            {
                mageName: "Mage O' Bolt",
                element: "Lightning",
                image: "https://i.ibb.co/72TQd3j/Bolt-Mage.png",
                ingredients: [
                    {
                        ingredientName: "Superconducting Alloy",
                        effect: "Causes body conductivity.",
                    },
                    {
                        ingredientName: "Silicon",
                        effect: "Increases processing power",
                    },
                    {
                        ingredientName: "Plasma",
                        effect: "Causes a lightning strike at a random gps coordinate on Earth.",
                    },
                    {
                        ingredientName: "Lithium",
                        effect: "Increases energy reserves.",
                    },

                ],
                _id: "61f330c3d78647941020d716",
            },
            {
                mageName: "Mage O' Frost",
                element: "Ice",
                image: "https://i.ibb.co/DVTHvCP/Frost-Mage.png",
                ingredients: [
                    {
                        ingredientName: "Glacier Melt",
                        effect: "Makes goosebumps.",
                    },
                    {
                        ingredientName: "Liquid Nitrogen",
                        effect: "Makes very frozen.",
                    },
                    {
                        ingredientName: "Scandinavian Snowfall",
                        effect: "Purifies the soul.",
                    },
                    {
                        ingredientName: "Comet Dust",
                        effect: "Transports consciousness to the Ice Age.",
                    },

                ],
                _id: "61f330c3d78647941020d717",
            },
            {
                mageName: "Mage O' Enigma",
                element: "Mystery",
                image: "https://i.ibb.co/zFsHZXn/Enigma-Mage.png",
                ingredients: [
                    {
                        ingredientName: "Soul Sludge",
                        effect: "Gives you the personality of the nearest ghost for 10 minutes.",
                    },
                    {
                        ingredientName: "Crystallized Memories",
                        effect: "Displays your best memory in someone's dream tonight.",
                    },
                    {
                        ingredientName: "Essence of Life",
                        effect: "Makes alive if dead.",
                    },
                    {
                        ingredientName: "Afterlife Milk",
                        effect: "Makes dead if alive.",
                    },

                ],
                _id: "61f330c3d78647941020d718",
            }
        ]).then((response) => {
        })
    })
    setTimeout(() => {
        res.redirect('/mages')
    }, 1000);

})

//index
router.get('/', (req, res) => {

    Mage.find({}, (err, allMages) => {
        if (err) {
            res.send(err)
        } else {
            res.render('mages/mages.ejs', { mage: allMages })
        }
    })
})

//New Potion
router.get('/newpotion/:id', (req, res) => {
    Mage.findById(req.params.id, (err, foundMage) => {
        if (err) {
            res.send(err)
        } else {
            res.render('potions/new.ejs', { mage: foundMage })
        }
    })
})

//show
router.get('/:id', (req, res) => {
    Mage.findById(req.params.id, (err, foundMage) => {
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
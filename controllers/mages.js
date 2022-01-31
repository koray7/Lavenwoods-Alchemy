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

//seed
// router.get('/seed', (req, res) => {
//     Mage.deleteMany([
//         Mage_O_Flame= {
//         type: "Mage",
//         element: "Flame",
//         quote: "LA FLAMEEEEEE",
//         image: 'https://i.ibb.co/64LzfMQ/Flame-Mage.png'
//         },
//         Mage_O_Bolt= {
//             type: "Mage",
//             element: "Bolt",
//             quote: "Shock me like an electric eel",
//             image: 'https://i.ibb.co/64LzfMQ/Bolt-Mage.png'
//             },
//             Mage_O_Frost= {
//                 type: "Mage",
//                 element: "Frost",
//                 quote: "Ice ice baby~",
//                 image: 'https://i.ibb.co/64LzfMQ/Frost-Mage.png'
//                 },
//                 Mage_O_Flame= {
//                     type: "Mage",
//                     element: "Mystery",
//                     quote: "Who wants wizard powers!?",
//                     image: 'https://i.ibb.co/64LzfMQ/Enigma-Mage.png'
//                     }
//     ]),
    // Mage.insertMany([
    //     Mage_O_Flame= {
    //     type: "Mage",
    //     element: "Flame",
    //     quote: "LA FLAMEEEEEE",
    //     image: 'https://i.ibb.co/64LzfMQ/Flame-Mage.png'
    //     },
    //     Mage_O_Bolt= {
    //         type: "Mage",
    //         element: "Bolt",
    //         quote: "Shock me like an electric eel",
    //         image: 'https://i.ibb.co/64LzfMQ/Bolt-Mage.png'
    //         },
    //         Mage_O_Frost= {
    //             type: "Mage",
    //             element: "Frost",
    //             quote: "Ice ice baby~",
    //             image: 'https://i.ibb.co/64LzfMQ/Frost-Mage.png'
    //             },
    //             Mage_O_Flame= {
    //                 type: "Mage",
    //                 element: "Mystery",
    //                 quote: "Who wants wizard powers!?",
    //                 image: 'https://i.ibb.co/64LzfMQ/Enigma-Mage.png'
    //                 }
    // ])
// })

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
const express = require('express')
const router = express.Router()

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
router.get('/seed', (req, res) => {

    
    Mages.deleteMany({}).then((response) => {
        Mages.insertMany([
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
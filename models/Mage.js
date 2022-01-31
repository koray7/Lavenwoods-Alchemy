const mongoose = require('mongoose')
const { insertMany } = require('./Potion')

const mageSchema = new mongoose.Schema({
    mageName: {
        type: String, required: true, default: "Unidentified Mage"
    },
    element: String,
    quote: String,
    image: String
    }, {timestamps: true})

const Mage = mongoose.model("Mage", mageSchema)
module.exports = Mage

// db.mages.insertMany([
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
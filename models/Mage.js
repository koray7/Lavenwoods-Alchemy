const mongoose = require('mongoose')

const potionSchema = new mongoose.Schema({
    mageName: {
        type: String, required: true, default: "Unidentified Mage"
    },
    Element: String,
    quote: String,
    Image: String
},


    { timestamps: true })

const Mage = mongoose.model("Mage", mageSchema)
module.exports = Mage


// const Mages = {
//     mageFlame: {
//         name: "Mage O' Flame",
//         element: "Fire",
//         quote: "",
//     },
//     mageBolt: {
//         name: "Mage O' Bolt",
//         element: "Lightning",
//         quote: ""
//     },
//     mageFrost: {
//         name: "Mage O' Frost",
//         element: "Ice",
//         quote: "",
//     },
//     mageEnigma: {
//         name: "Mage O' Enigma",
//         element: "Mystery",
//         quote: "",
//     }
// }

// const Mage = mongoose.model("Mage", Mages)
// module.exports = Mage
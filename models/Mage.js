const mongoose = require('mongoose')

<<<<<<< HEAD
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

const Mage = mongoose.model("Mage", Mages)
module.exports = Mage
=======
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
>>>>>>> main

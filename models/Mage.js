const mongoose = require('mongoose')

const Mages = [
    mageFlame = {
        _id: 1,
        name: "Mage O' Flame",
        element: "Fire",
        quote: "",
        image: "https://i.ibb.co/64LzfMQ/Flame-Mage.png",
    },
    mageBolt = {
        _id: 2,
        name: "Mage O' Bolt",
        element: "Lightning",
        quote: "",
        image: "https://i.ibb.co/72TQd3j/Bolt-Mage.png",
    },
    mageFrost = {
        _id: 3,
        name: "Mage O' Frost",
        element: "Ice",
        quote: "",
        image: "https://i.ibb.co/DVTHvCP/Frost-Mage.png",
    },
    mageEnigma = {
        _id: 4,
        name: "Mage O' Enigma",
        element: "Mystery",
        quote: "",
        image: "https://i.ibb.co/zFsHZXn/Enigma-Mage.png",
    }
]


const mageSchema = new mongoose.Schema({
    mageName: {
        type: String, required: true, default: "Unidentified Mage"
    },
    element: String,
    quote: String,
    image: String
    }, {timestamps: true})

const Mage = mongoose.model("Mage", mageSchema)
module.exports = Mage, Mages
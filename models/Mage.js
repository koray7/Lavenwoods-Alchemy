const mongoose = require('mongoose')

const mageSchema = new mongoose.Schema ({
    mageName: {
        type: String, required: true, default: "Unidentified Mage"
    },
    element: String,
    quote: String,
    image: String 
}, {timestamps: true})

const Mage = mongoose.model("Mage", mageSchema)
module.exports = Mage 
const mongoose = require('mongoose')

const potionSchema = new mongoose.Schema({
    mageName: {
        type: String, required: true, default: "Unidentified Mage"
    },
    element: String,
    quote: String,
    image: String
    }, {timestamps: true})

const Potion = mongoose.model("Potion", potionSchema)
module.exports = Potion
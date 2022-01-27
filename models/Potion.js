const mongoose = require('mongoose')

const potionSchema = new mongoose.Schema({
    potionName: {
        type: String, required: true, default: "Unidentified Brew"
    },
    attributes: [String],
    mage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Mage'
    }
    // type of mage/element string 
}, {timestamps: true})

const Potion = mongoose.model("Potion", potionSchema)
module.exports = Potion
const mongoose = require('mongoose')

const potionSchema = new mongoose.Schema({
    potionName: {
        type: String, required: true, default: "Unidentified Brew"
    },
    attributes: [String]
<<<<<<< HEAD
    
=======
    // type of mage/element string 
>>>>>>> main
}, {timestamps: true})

const Potion = mongoose.model("Potion", potionSchema)
module.exports = Potion
const mongoose = require('mongoose')

const potionSchema = new mongoose.Schema({
    name: {
        type: String, required: true, default: "Unidentified Brew"
    },
    attributes: [String]
}, {timestamps: true})
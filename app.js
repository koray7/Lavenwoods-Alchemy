//DEPENDENCIES
const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000
const methodOverride = require('method-override')
const Potion = require("./models/Potion")
const Mage = require("./models/Mage")
const magesController = require('./controllers/mages')
const potionsController = require('./controllers/potions')

// EJS
app.set('view engine', 'ejs')

//MONGOOSE
const mongoose = require('mongoose')
const URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/potions"
mongoose.connect(URI, () => console.log(`Mongoose connected at ${URI}`))

//STATIC (JS, CSS)
app.use(express.static(__dirname + 'public'))

//MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

//Mages Controller
app.use('/mages', magesController)
//Potions Controller
app.use('/potions', potionsController)

//HOME ROUTE
app.get('/', (req, res) => {
    res.render('main.ejs')
})

//SERVER START
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

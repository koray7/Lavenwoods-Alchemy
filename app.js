
//DEPENDENCIES
const express = require("express")
const app = express()
const PORT = 3000
const methodOverride = require('method-override')
const Potion = require("./models/Potion")
const magesController = require('./controllers/mages')
const potionsController = require('./controllers/potions')
app.use(express.static('public'))
app.set('view engine', 'ejs');


//MONGOOSE
const mongoose = require('mongoose')
const URI = "mongodb://127.0.0.1:27017/potions"
mongoose.connect(URI, () => console.log(`Mongoose connected at ${URI}`))

//STYLING
app.use(express.static('public'))


//MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + 'public/css'))

//Mages Controller
app.use('/mages', magesController)
//Potions Controller
app.use('/potions', potionsController)


//HOME ROUTE
app.get('/', (req, res) => {
    res.render('main.ejs')
})

//index



//SERVER START
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

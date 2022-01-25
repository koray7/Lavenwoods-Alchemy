
//DEPENDENCIES
const express = require("express")
const app = express()
const PORT = 3000
const methodOverride = require('method-override')
const Potion = require("./models/Potion")
const magesController = require('./controllers/mages')
const potionsController = require('./controllers/potions')

//MONGOOSE
const mongoose = require('mongoose')
const URI = "mongodb://127.0.0.1:27017/potions"
mongoose.connect(URI, () => console.log(`Mongoose connected at ${URI}`))




//MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))


//Mages Controller
app.use('/mages', magesController)
//Potions Controller
app.use('/potions', potionsController)


//HOME ROUTE
app.get('/', (req, res) => {
    res.render('main.ejs')
})



<<<<<<< HEAD

app.listen(PORT, function () {
    console.log("Server is Running on port", PORT);
})
=======
//SERVER START
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
>>>>>>> 2336f88efeaa6732a3284816138dff1aa242f575

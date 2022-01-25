
//DEPENDENCIES
const express = require("express")
const app = express()
const PORT = 3000
const methodOverride = require('method-override')
const Potion = require("./models/Potion")

//MONGOOSE
const mongoose = require('mongoose')
const URI = "mongodb://127.0.0.1:27017/potions"
mongoose.connect(URI, () => console.log(`Mongoose connected at ${URI}`))




//MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: false}))

//ROUTING

//index
app.get('/potions', (req, res) => {
    Potion.find({}, (err, allPotions) => {
        if (err) {
            res.send(err)
        } else {
            res.render('potions/index.ejs', {potions: allPotions})
        }
    })
})

//New
app.get('/potions/new', (req, res) => {
    // res.send('New Potion Route')
    // res.render('new.ejs')
    res.render('potions/new.ejs')
})

//index
app.get('/potions/index', (req, res) => {
    // res.send("Potions Main Page")
    res.render('potions/index.ejs')
})

//main
app.get('/potions', (req, res) => {
    // res.send("Potions Main Page")
    res.render('potions/main.ejs')
})


//show
app.get('/potions/:id', (req, res) => {
    Potion.findById(req.params.id, (err, foundPotion) => {
        if(err) {
            res.send(err)
        } else {
            res.render('potions/show.ejs', {potion: foundPotion})
        }
    })
})

//edit
app.get('/potions/:id/edit', (req, res) => {
    res.send(`Edit route for ${req.params.id}`)
})


//create
app.post('/potions', (req, res) => {
    Potion.create(req.body, (err, newPotion) => {
        if (err) {
            res.send(err)
        } else {
            console.log(newPotion)
            res.redirect('/potions')
        }
    })
})

//delete
app.delete('/potions/:id', (req, res) => {
    Potion.findByIdAndDelete(req.params.id, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/potions')
        }
    })
})

//update

app.put('/potions/:id', (req, res) => {
    res.send(`Potion update: ${req.params.id}`)
})

//MAGE ROUTES

//index
app.get('/mages', (req, res) => {
    res.render('mages/mages.ejs')
})




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

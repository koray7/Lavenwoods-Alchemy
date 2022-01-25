
//DEPENDENCIES
const express = require("express")
const app = express()
const PORT = 3000
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
images = [{ image: "http://nuvotera.com/wp-content/uploads/2013/10/email-protection-banner-2.jpg" }];
app.use(express.static('public'));

//MIDDLEWARE


//ROUTING

//New
app.get('/potions/new', (req, res) => {
    res.send('New Potion Route')
})

//index
app.get('/', (req, res) => {
    // res.render("show.ejs")
    res.render("show.ejs", { image: images });
})

//show
app.get('/potions/:id', (req, res) => {
    const id = req.params.id
    res.send('Potion Show Page')
})

//edit
app.get('/potions/:id/edit', (req, res) => {
    res.send(`Edit route for ${req.params.id}`)
})

//delete
app.delete('/potions/:id', (req, res) => {
    res.send(`Potions delete route for id ${req.params.id}`)
})

//update

app.put('/potions/:id', (req, res) => {
    res.send(`Potion update: ${req.params.id}`)
})









//SERVER START
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

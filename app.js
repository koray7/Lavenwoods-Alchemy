
//DEPENDENCIES
const express = require("express")
const app = express()
const PORT = 3000

//MIDDLEWARE


//ROUTING

//New
app.get('/potions/new', (req, res) => {
    res.send('New Potion Route')
})

//index
app.get('/potions', (req, res) => {
    res.send("Potions Main Page")
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

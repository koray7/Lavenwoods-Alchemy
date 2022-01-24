const express = require("express")
const app = express()
const PORT = 3000

// const mongoose = require("mongoose");
// const methodOverride = require("method-override")
// app.use(methodOverride('_method'))
// app.set("view engine", "ejs")
// app.use(express.static("public"))
// app.use(express.urlencoded({ extended: true }))

// Routes for Create




// Show  page to shows that was created


app.get("/", (req, res) => {
    res.render("show.ejs")
})










app.listen(PORT, function () {
    console.log("Server is Running on port", PORT);
})
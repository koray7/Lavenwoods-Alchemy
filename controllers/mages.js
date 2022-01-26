const express = require('express')
const router = express.Router()
const Potion = require("../models/Potion")

//ROUTES

//index
router.get('/', (req, res) => {
    res.render('mages/mages.ejs')
})

module.exports = router
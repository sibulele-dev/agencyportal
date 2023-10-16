const express = require("express");
const router = express.Router();
const { register } = require("../middleware/auth");

// Get requests
router.get('/signup', (req, res) => {
    res.render('signup')
})


// POST requests
router.post('/signup', register, (req, res) => {
    res.render('signup')
})
    
module.exports = router

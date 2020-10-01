const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('Welcome to the Product page.');
});

router.post('/', (req, res) => {
  
    console.log(req.body.password);
});

module.exports = router;
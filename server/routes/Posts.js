const express = require('express');
const router = express.Router();
const { Posts } = require("../models");


router.get('/', (req, res) => {
    res.send("Hello to your mom!");
});

router.post('/', async (req, res) => {
    const post = req.body;

    //inserts a row into database
    await Posts.create(post);

    //return same data that was sent
    res.json(post);
});

module.exports = router;
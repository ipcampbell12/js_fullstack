const express = require('express');
const router = express.Router();
const { Comments } = require("../models");


router.get('/:postId', async (req, res) => {
    const postId = req.params.postId;
    const comments = await Comments.findAll({
        where: { PostId: postId }
    });

    return res.json(comments);

});

router.get('/', async (req, res) => {

    const comments = await Comments.findAll();

    return res.json(comments);

});

router.post('/', async (req, res) => {
    const comment = req.body;

    //inserts a row into database
    await Comments.create(comment);

    //return same data that was sent
    return res.json(comment);
});

module.exports = router;
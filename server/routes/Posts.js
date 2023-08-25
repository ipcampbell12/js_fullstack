const express = require('express');
const router = express.Router();
const { Posts, Comments } = require("../models");

//get all posts
router.get('/', async (req, res) => {
    const listOfPosts = await Posts.findAll({
        include: {
            model: Comments,
            as: "Comments",
            attributes: ["id", "commentBody"]
        }
    });
    res.send(listOfPosts);

});

router.post('/', async (req, res) => {
    const post = req.body;

    //inserts a row into database
    await Posts.create(post);

    //return same data that was sent
    res.json(post);
});

//get post by id
router.get('/:id', async (req, res) => {
    const post = await Posts.findAll({
        where: { id: req.params.id },
        include: {
            model: Comments,
            as: "Comments",
            attributes: ["id", "commentBody"]
        }
    });

    return res.status(200).json(post);
});

router.delete('/:id', async (req, res) => {
    const post = await Posts.findByPk(req.params.id);

    await post.destroy();

    res.status(200).json({ message: `Post with id of ${req.params.id} was deleted` });
})

router.put('/:id', async (req, res) => {
    try {
        const title = req.body.title;
        const postText = req.body.postText;
        const username = req.body.username;
        const id = req.params.id;

        if (!title || !postText || !username) {
            res.sendStatus(400);
            console.log("The request was missing stuff");
        }

        const post = await Posts.update(title, postText, username, id);

        res.json(post);
    } catch (e) {
        console.log(e);
        res.sendStatus(400);
    }
});

module.exports = router;
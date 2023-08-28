const express = require('express');
const router = express.Router();
const { Users, Posts } = require("../models");
const bcrypt = require('bcrypt');


//hashing is a one way function: can never know original passowrd from original value
//can only compare hashed value and see if they were the same strings


//create new user
router.post('/', async (req, res) => {

    //need to get password individually in order to hash it
    const { username, password } = req.body;

    try {
        const hash = await bcrypt.hash(password, 10);
        const newUser = await Users.create({
            username: username,
            password: hash
        });

        return res.send(newUser);
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }

});

//get one
//make sure that string after paren in route is same as prop in where clause
router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findAll({
            where: { id: req.params.id },
            include: {
                model: Posts,
                as: "Posts"
            }
        })

        res.send(user);
    } catch (err) {
        console.log(err)
    }
});

//get all
router.get('/', async (req, res) => {
    try {
        const allUsers = await Users.findAll({
            include: {
                model: Posts,
                as: "Posts"
            }
        });
        res.send(allUsers);
    } catch (err) {
        console.log(err);
    }

});




router.delete('/:id', async (req, res) => {

    try {
        const user = req.params.id;
        await Users.destroy({
            where: { id: user }
        });

        res.send(user);
    } catch (err) {
        console.log(err);
    };
});


router.put('/:id', async (req, res) => {
    try {
        await Users.update({
            firstName: req.body.firstName,
            age: req.body.age
        }, {
            where: { id: req.params.id }
        });
        res.send(`User with id ${req.params.id} has been updated`);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;
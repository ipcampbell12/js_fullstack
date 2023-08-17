const express = require('express');
const router = express.Router();
const { Users } = require("../models");

//get one
//make sure that string after paren in route is same as prop in where clause
router.get('/:id', async (req, res) => {
    try {
        const user = await Users.findAll({
            where: { id: req.params.id }
        })

        res.send(user);
    } catch (err) {
        console.log(err)
    }
});

//get all
router.get('/', async (req, res) => {
    try {
        const allUsers = await Users.findAll();
        res.send(allUsers);
    } catch (err) {
        console.log(err);
    }

});

//create new user
router.post('/', async (req, res) => {
    const user = req.body;

    try {
        await Users.create(user);
        res.send(user)
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
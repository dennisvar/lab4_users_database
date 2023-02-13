const express = require('express');
const userModel = require('../models/user')
const routes = express.Router();

routes.post("/users", async(req, res) => {
    try {
        // console.log(req.body.username)
        const user = await userModel(req.body);
        // const user = new userModel({
        //     username: req.body.username,
        //     email: req.body.email,
        //     city: req.body.city,
        //     url: req.body.url,
        //     zip: req.body.zip,
        //     phone: req.body.phone
        // });
        await user.save();
        res.status(201).send(user);
    }
    catch (error) {
        res.status(500).send(error);
        // console.log(error);
    }
});

module.exports = routes;
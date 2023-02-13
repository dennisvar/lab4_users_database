const express = require('express');
const userModel = require('../models/user')
const routes = express.Router();

routes.post("/users", async(req, res) => {
    try {
        const user = await userModel(req.body);
        await user.save();
        res.status(201).send(user);
    }
    catch (error) {
        res.status(500).send(error);
    }
});

module.exports = routes;
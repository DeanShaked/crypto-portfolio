const express = require('express');
const authController = require('../../controller/authController/authController');

const route = express.Router();

route.post('/register', authController.createNewUser);

module.exports = route;

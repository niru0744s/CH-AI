const express = require('express');
const route = express.Router();
const userController = require("../controllers/authController/userAuth");

route.post('/register',userController.register);

module.exports = route;
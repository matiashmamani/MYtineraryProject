const express        = require('express');
const userController = require('../controllers/userController');
const userRouter     = express.Router();

userRouter.post('/', userController.uploadImage.single('imageFile'),userController.createUser);

module.exports = userRouter;
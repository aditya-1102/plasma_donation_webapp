const express = require('express');
import userController from './user.controller';

export const userrouter = express.Router();

userrouter.route('/')
.get(userController.findAll)


userrouter.post('/signup',userController.signup);
userrouter.post('/login',userController.login);

userrouter.route('/:id')
.put(userController.updateuser)
.delete(userController.deleteuser);
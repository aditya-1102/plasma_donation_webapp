import express from 'express';
import {userrouter} from './resources/user/user.router';

export const restRouter = express.Router();

restRouter.use('/user',userrouter);
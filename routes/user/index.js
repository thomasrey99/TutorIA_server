const { Router } = require('express');
const { postUserRouter } = require('./userPost.routes');
const { getUserRouter } = require('./userGet.routes');

const userRouter = Router();

userRouter.use('/', postUserRouter);
userRouter.use('/', getUserRouter);

module.exports = userRouter;
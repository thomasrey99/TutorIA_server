const { Router } = require('express');
const { postUserRouter } = require('./userPost.routes');

const userRouter = Router();

userRouter.use('/', postUserRouter);

module.exports = userRouter;
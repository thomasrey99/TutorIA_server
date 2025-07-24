const { Router } = require('express');
const { postUserRouter } = require('./userPost.routes');
const { getUserRouter } = require('./userGet.routes');
const patchUserRouter = require('./userPatch.routes');

const userRouter = Router();

userRouter.use('/', postUserRouter);
userRouter.use('/', getUserRouter);
userRouter.use('/', patchUserRouter);

module.exports = userRouter;
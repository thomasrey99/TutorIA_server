const { Router } = require('express');
const { postUserRouter } = require('./userPost.routes');
const { getUserRouter } = require('./userGet.routes');
const patchUserRouter = require('./userPatch.routes');
const deleteUserRouter = require('./userDelete.routes');

const userRouter = Router();

userRouter.use('/', postUserRouter);
userRouter.use('/', getUserRouter);
userRouter.use('/', patchUserRouter);
userRouter.use('/', deleteUserRouter);

module.exports = userRouter;
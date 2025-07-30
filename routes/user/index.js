const { Router } = require('express');
const { getUserRouter } = require('./userGet.routes');
const patchUserRouter = require('./userPatch.routes');
const deleteUserRouter = require('./userDelete.routes');
const authenticateToken = require('../../middlewares/authenticateToken');

const userRouter = Router();

userRouter.use('/', authenticateToken, getUserRouter);
userRouter.use('/',authenticateToken, patchUserRouter);
userRouter.use('/', authenticateToken,deleteUserRouter);

module.exports = userRouter;
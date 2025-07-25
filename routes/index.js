const { Router } = require('express');
const userRouter = require('./user');
const subjectRouter = require('./subject');
const authenticateToken = require('../middlewares/authenticateToken');

const mainRouter = Router();

mainRouter.use("/user", userRouter);
mainRouter.use("/subjects", authenticateToken, subjectRouter);

module.exports = mainRouter;
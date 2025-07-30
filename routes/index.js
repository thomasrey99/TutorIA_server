const { Router } = require('express');
const userRouter = require('./user');
const subjectRouter = require('./subject');
const authenticateToken = require('../middlewares/authenticateToken');
const materialRouter = require('./material');
const authRouter = require('./auth/auth.route');

const mainRouter = Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/subjects", authenticateToken, subjectRouter);
mainRouter.use("/material", authenticateToken, materialRouter);

module.exports = mainRouter;
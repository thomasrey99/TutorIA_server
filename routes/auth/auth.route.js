const { Router } = require('express');
const { loginUserHandler, logOutUserHandler, registerUserHandler } = require('../../handlers/auth/auth.handlers');
const authenticateToken = require('../../middlewares/authenticateToken');

const authRouter = Router();

authRouter.post("/register", registerUserHandler);
authRouter.post("/login", loginUserHandler);
authRouter.post("/logout", authenticateToken, logOutUserHandler);

module.exports = authRouter;
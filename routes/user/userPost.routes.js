const { Router } = require('express');
const { registerUserHandler, loginUserHandler, logOutUserHandler } = require('../../handlers/user/userPost.handlers');

const postUserRouter = Router();

postUserRouter.post("/register", registerUserHandler);
postUserRouter.post("/auth/login", loginUserHandler);
postUserRouter.post("/auth/logout", logOutUserHandler);

module.exports = {
    postUserRouter
};
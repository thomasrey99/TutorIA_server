const { Router } = require('express');
const { registerUserHandler, loginUserHandler } = require('../../handlers/user/userPost.handlers');

const postUserRouter = Router();

postUserRouter.post("/register", registerUserHandler);
postUserRouter.post("/login", loginUserHandler)
module.exports = {
    postUserRouter
};
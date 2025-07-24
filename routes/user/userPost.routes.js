const { Router } = require('express');
const { registerUserHandler } = require('../../handlers/user/userPost.handlers');

const postUserRouter = Router();

postUserRouter.post("/register", registerUserHandler);

module.exports = {
    postUserRouter
};
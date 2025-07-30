const { Router } = require('express');
const { getUserProfileHandler } = require('../../handlers/user/userGet.handlers');

const getUserRouter = Router();

getUserRouter.get('/profile', getUserProfileHandler);

module.exports = {
    getUserRouter
};
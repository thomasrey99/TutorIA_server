const { Router } = require('express');
const { getUserProfileHandler } = require('../../handlers/user/userGet.handlers');
const authenticateToken = require('../../middlewares/authenticateToken');

const getUserRouter = Router();

getUserRouter.get('/profile', authenticateToken, getUserProfileHandler);

module.exports = {
    getUserRouter
};
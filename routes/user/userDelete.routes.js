const { Router } = require('express');
const authenticateToken = require('../../middlewares/authenticateToken');
const deleteUserHandler = require('../../handlers/user/userDelete.handlers');

const deleteUserRouter = Router();

deleteUserRouter.delete('/delete', authenticateToken, deleteUserHandler);

module.exports = deleteUserRouter;
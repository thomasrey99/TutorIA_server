const { Router } = require('express');
const deleteUserHandler = require('../../handlers/user/userDelete.handlers');

const deleteUserRouter = Router();

deleteUserRouter.delete('/delete', deleteUserHandler);

module.exports = deleteUserRouter;
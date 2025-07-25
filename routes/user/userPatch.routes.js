const { Router } = require('express');
const { updateProfileHandler, changePasswordHandler } = require('../../handlers/user/userPatch.handlers');
const authenticateToken = require('../../middlewares/authenticateToken');

const patchUserRouter = Router();

patchUserRouter.patch("/profile", authenticateToken, updateProfileHandler);
patchUserRouter.patch("/changePassword", authenticateToken, changePasswordHandler);

module.exports = patchUserRouter;
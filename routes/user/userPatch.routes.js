const { Router } = require('express');
const { updateProfileHandler, changePasswordHandler } = require('../../handlers/user/userPatch.handlers');

const patchUserRouter = Router();

patchUserRouter.patch("/profile", updateProfileHandler);
patchUserRouter.patch("/changePassword", changePasswordHandler);

module.exports = patchUserRouter;
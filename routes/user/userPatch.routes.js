const { Router } = require('express');
const { updateProfileHandler } = require('../../handlers/user/userPatch.handlers');
const authenticateToken = require('../../middlewares/authenticateToken');

const patchUserRouter=Router();

patchUserRouter.patch("/profile", authenticateToken, updateProfileHandler);

module.exports=patchUserRouter;
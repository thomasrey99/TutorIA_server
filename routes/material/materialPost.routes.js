const { Router } = require('express');
const { createMaterialHandler } = require('../../handlers/material/materialPost.handlers');

const postMaterialRouter = Router();

postMaterialRouter.post('/:subjectId', createMaterialHandler);

module.exports = postMaterialRouter;
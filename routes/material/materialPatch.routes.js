const { Router } = require('express');
const { updateMaterialHandler } = require('../../handlers/material/materialPatch.handlers');

const patchMaterialsRouter = Router();

patchMaterialsRouter.patch('/:materialId', updateMaterialHandler);

module.exports = patchMaterialsRouter;
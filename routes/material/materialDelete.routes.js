const { Router } = require('express');
const { deleteMaterialHandler } = require('../../handlers/material/materialDelete.handlers');

const deleteMaterialRouter = Router();

deleteMaterialRouter.delete("/:materialId", deleteMaterialHandler);

module.exports = deleteMaterialRouter;
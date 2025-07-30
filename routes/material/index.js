const { Router } = require('express');
const postMaterialRouter = require('./materialPost.routes');
const { getMaterialsRouter } = require('./materialGet.routes');
const patchMaterialsRouter = require('./materialPatch.routes');

const materialRouter = Router();

materialRouter.use('/', postMaterialRouter);
materialRouter.use('/', getMaterialsRouter);
materialRouter.use('/', patchMaterialsRouter);

module.exports = materialRouter;
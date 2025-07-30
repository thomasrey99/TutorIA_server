const { Router } = require('express');
const postMaterialRouter = require('./materialPost.routes');
const { getMaterialsRouter } = require('./materialGet.routes');

const materialRouter = Router();

materialRouter.use('/', postMaterialRouter);
materialRouter.use('/', getMaterialsRouter);

module.exports = materialRouter;
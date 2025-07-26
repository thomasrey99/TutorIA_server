const { Router } = require('express');
const postStudyMaterialRouter = require('./studyMaterialPost.routes');

const studyMaterialRouter = Router();

studyMaterialRouter.use('/', postStudyMaterialRouter);

module.exports = studyMaterialRouter;
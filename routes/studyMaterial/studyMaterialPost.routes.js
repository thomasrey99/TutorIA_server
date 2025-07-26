const { Router } = require('express');
const { createStudyMaterialHandler } = require('../../handlers/studyMaterial/studyMaterialPost.handlers');

const postStudyMaterialRouter = Router();

postStudyMaterialRouter.post('/:subjectId', createStudyMaterialHandler);

module.exports = postStudyMaterialRouter;
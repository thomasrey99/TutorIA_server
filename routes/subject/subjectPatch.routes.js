const { Router } = require('express');
const { updateSubjectHandler } = require('../../handlers/subject/subjectPatch.handlers');

const patchSubjectRouter = Router();

patchSubjectRouter.patch('/:subjectId', updateSubjectHandler);

module.exports = patchSubjectRouter;
const { Router } = require('express');
const { getSubjectByIdHandler } = require('../../handlers/subject/subjectGet.handlers');

const getSubjectRouter = Router();

getSubjectRouter.get('/:subjectId', getSubjectByIdHandler);

module.exports = getSubjectRouter;
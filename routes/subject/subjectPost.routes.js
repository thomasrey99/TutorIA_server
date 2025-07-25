const { Router } = require('express');
const { createSubjectHandler } = require('../../handlers/subject/subjectPost.handlers');

const postSubjectRouter = Router();

postSubjectRouter.post('/', createSubjectHandler);

module.exports = postSubjectRouter;
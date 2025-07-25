const { Router } = require('express');
const { createSubjectHandler } = require('../../handlers/subject/subjectPost.handlers');

const postSubjectRouter = Router();

postSubjectRouter.post('/newSubject', createSubjectHandler);

module.exports = postSubjectRouter;
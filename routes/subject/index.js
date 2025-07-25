const { Router } = require('express');
const postSubjectRouter = require('./subjectPost.routes');

const subjectRouter = Router();

subjectRouter.use('/', postSubjectRouter);

module.exports = subjectRouter;
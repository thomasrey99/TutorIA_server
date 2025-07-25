const { Router } = require('express');
const postSubjectRouter = require('./subjectPost.routes');
const getSubjectRouter = require('./subjectGet.routes');

const subjectRouter = Router();

subjectRouter.use('/', postSubjectRouter);
subjectRouter.use('/', getSubjectRouter);
module.exports = subjectRouter;
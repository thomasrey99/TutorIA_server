const { Router } = require('express');
const postSubjectRouter = require('./subjectPost.routes');
const getSubjectRouter = require('./subjectGet.routes');
const patchSubjectRouter = require('./subjectPatch.routes');

const subjectRouter = Router();

subjectRouter.use('/', postSubjectRouter);
subjectRouter.use('/', getSubjectRouter);
subjectRouter.use('/', patchSubjectRouter)

module.exports = subjectRouter;
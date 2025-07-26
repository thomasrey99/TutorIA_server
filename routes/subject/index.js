const { Router } = require('express');
const postSubjectRouter = require('./subjectPost.routes');
const getSubjectRouter = require('./subjectGet.routes');
const patchSubjectRouter = require('./subjectPatch.routes');
const deleteSubjectRouter = require('./subjectDelete.routes');

const subjectRouter = Router();

subjectRouter.use('/', postSubjectRouter);
subjectRouter.use('/', getSubjectRouter);
subjectRouter.use('/', patchSubjectRouter)
subjectRouter.use('/', deleteSubjectRouter);

module.exports = subjectRouter;
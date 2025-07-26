const { Router } = require('express');
const { deleteSubjectHandler } = require('../../handlers/subject/subjectDelete.handlers');

const deleteSubjectRouter = Router();

deleteSubjectRouter.delete('/:subjectId', deleteSubjectHandler);

module.exports = deleteSubjectRouter;
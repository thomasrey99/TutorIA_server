const { Router } = require('express');
const { getMaterialsBySubjectHandler } = require('../../handlers/material/materialGet.handlers');

const getMaterialsRouter = Router();

getMaterialsRouter.get("/:subjectId", getMaterialsBySubjectHandler);

module.exports = {
    getMaterialsRouter
};
const { Router } = require('express');
const { getMaterialByIdHandler } = require('../../handlers/material/materialGet.handlers');

const getMaterialsRouter = Router();

getMaterialsRouter.get("/:materialId", getMaterialByIdHandler);

module.exports = {
    getMaterialsRouter
};
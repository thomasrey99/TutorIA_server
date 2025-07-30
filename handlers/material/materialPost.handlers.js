const { createMaterial } = require("../../controllers/material/materialPost.controllers");
const buildResponse = require("../../utils/responseBuilder");

const createMaterialHandler = async (req, res) => {
    try {
        const userId = req.user.id;
        const { subjectId } = req.params;
        const data = req.body;
        const material = await createMaterial({
            userId,
            subjectId,
            data
        });
        return res.status(201).json(
            buildResponse(
                {
                    status: 201,
                    message: 'Material created successfuly',
                    data: material
                }
            )
        );
    } catch (error) {
        return res.status(400).json(
            buildResponse(
                {
                    status: 400,
                    message: error.message
                }
            )
        );
    };
};

module.exports = {
    createMaterialHandler
};
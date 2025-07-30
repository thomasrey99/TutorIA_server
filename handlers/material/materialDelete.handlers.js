const { deleteMaterial } = require("../../controllers/material/materialDelete.controllers");
const buildResponse = require("../../utils/responseBuilder");

const deleteMaterialHandler = async (req, res) => {
    try {
        const userId = req.user.id;
        const { materialId } = req.params;
        await deleteMaterial({
            userId,
            materialId
        });
        return res.status(200).json(
            buildResponse(
                {
                    status: 200,
                    message: "Material deleted successfully"
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
    deleteMaterialHandler
};
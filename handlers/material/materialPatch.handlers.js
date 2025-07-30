const { updateMaterial } = require("../../controllers/material/materialPatch.controllers");
const buildResponse = require("../../utils/responseBuilder");

const updateMaterialHandler = async (req, res) => {
    try {
        const { materialId } = req.params;
        const userId = req.user.id;
        const updatedData = req.body;
        const updatedMaterial = await updateMaterial({
            userId,
            materialId,
            updatedData
        });
        return res.status(200).json(
            buildResponse(
                {
                    status: 200,
                    message: "Material updated successfully",
                    data: updatedMaterial
                }
            )
        );
    } catch (error) {
        return res.status(400).json(
            buildResponse(
                {
                    status: 400,
                    message: error.message,
                    error: true,
                }
            )
        );
    };
};

module.exports = {
    updateMaterialHandler
};
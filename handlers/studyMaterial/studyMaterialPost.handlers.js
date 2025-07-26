const { createStudyMaterial } = require("../../controllers/studyMaterial/studyMaterialPost.controllers");
const buildResponse = require("../../utils/responseBuilder");

const createStudyMaterialHandler = async (req, res) => {
    try {
        const userId = req.user.id;
        const { subjectId } = req.params;
        const data = req.body;
        const studyMaterial = await createStudyMaterial({
            userId,
            subjectId,
            data
        });
        return res.status(201).json(
            buildResponse(
                {
                    status: 201,
                    message: 'Study material created successfuly',
                    data: studyMaterial
                }
            )
        );
    } catch (error) {

    };
};

module.exports = {
    createStudyMaterialHandler
};
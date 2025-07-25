const { updateSubject } = require("../../controllers/subjects/subjectPatch.controllers");
const buildResponse = require("../../utils/responseBuilder");

const updateSubjectHandler = async (req, res) => {
    try {
        const userId = req.user.id;
        const { subjectId } = req.params;
        const updatedData = req.body;
        const updatedSubject = await updateSubject({
            userId,
            subjectId,
            updatedData
        });
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: 'Subject updated successfully',
                data: updatedSubject
            })
        );
    } catch (error) {
        return res.status(400).json(
            buildResponse({
                status: 400,
                message: error.message,
                error: true
            })
        );
    };
};

module.exports = {
    updateSubjectHandler
};
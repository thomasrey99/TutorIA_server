const { deleteSubject } = require("../../controllers/subjects/subjectDelete.controllers");
const buildResponse = require("../../utils/responseBuilder");

const deleteSubjectHandler = async (req, res) => {
    try {
        const userId = req.user.id;
        const { subjectId } = req.params;
        await deleteSubject({
            userId,
            subjectId
        });
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: 'Subject deleted successfully'
            })
        );
    } catch (error) {
        return res.status(400).json(
            buildResponse({
                status: 400,
                message: error.message
            })
        );
    };
};

module.exports = {
    deleteSubjectHandler
};
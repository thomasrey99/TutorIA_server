const { getSubjectById } = require("../../controllers/subjects/subjectGet.controller");
const buildResponse = require("../../utils/responseBuilder");

const getSubjectByIdHandler = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const userId = req.user.id;
        const subject = await getSubjectById(userId, subjectId);
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: 'Subject successfully obtained',
                data: subject
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
    getSubjectByIdHandler
}
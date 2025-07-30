const buildResponse = require("../../utils/responseBuilder");

const getMaterialsBySubjectHandler = async (req, res) => {
    try {
        const { subjectId } = req.params;
        const userId = req.user.id;
        const materials = await getMaterialsBySubject({
            subjectId,
            userId
        });
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: 'Materials obtained succesfully',
                data: materials
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
    getMaterialsBySubjectHandler
};
const { createSubject } = require("../../controllers/subjects/subjectPost.controllers");
const buildResponse = require("../../utils/responseBuilder");

const createSubjectHandler = async (req, res) => {
    try {
        const userId = req.user.id;
        const data = req.body;
        const newSubject = await createSubject({
            userId,
            data
        });
        return res.status(201).json(
            buildResponse({
                status: 201,
                message: 'Subject created successfully!',
                data: newSubject
            })
        );
    } catch (error) {
        return res.status(400).json(
            buildResponse({
                status: 400,
                message: error.message,
                error: true
            })
        )
    };
};

module.exports = {
    createSubjectHandler
};
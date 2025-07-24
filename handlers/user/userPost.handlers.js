const { registerUser } = require('../../controllers/user/userPost.controllers');
const buildResponse = require('../../utils/responseBuilder');

const registerUserHandler = async (req, res) => {
    try {
        const data = req.body;
        const user = await registerUser(data);
        return res.status(201).json(
            buildResponse({
                status: 201,
                message: "User created!",
                data: user
            })
        );
    } catch (error) {
        return res.status(400).json(
            buildResponse({
                status: 400,
                error: true,
                message: error.message
            })
        );
    };
};

module.exports = {
    registerUserHandler
};
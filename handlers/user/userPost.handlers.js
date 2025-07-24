const { registerUser, loginUser } = require('../../controllers/user/userPost.controllers');
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

const loginUserHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await loginUser({ email, password });
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: 'login success!',
                data: {
                    token,
                    user: {
                        id: user.id,
                        email: user.email,
                        role: user.role
                    }
                }
            })
        );
    } catch (error) {
        return res.status(401).json(
            buildResponse({
                status: 401,
                error: true,
                message: error.message
            })
        );
    };
};

module.exports = {
    registerUserHandler,
    loginUserHandler
};
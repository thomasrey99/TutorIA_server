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
        return res.status(200).cookie(
            "token",
            token,
            {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "strict",
                maxAge: 1000 * 60 * 60 * 24,
            }
        ).json(
            buildResponse({
                status: 200,
                message: 'login success!',
                data: user
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

const logOutUserHandler = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: "Logout Successfully"
            })
        );
    } catch (error) {
        return res.status(400).json(
            buildResponse({
                status: 400,
                message: "Logout error",
                error: true
            })
        );
    };
};

module.exports = {
    registerUserHandler,
    loginUserHandler,
    logOutUserHandler
};
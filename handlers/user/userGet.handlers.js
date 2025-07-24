const { getUserProfile } = require("../../controllers/user/userGet.controllers");
const buildResponse = require("../../utils/responseBuilder");

const getUserProfileHandler = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await getUserProfile(userId);
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: 'User successfully obtained',
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

module.exports = {
    getUserProfileHandler
};
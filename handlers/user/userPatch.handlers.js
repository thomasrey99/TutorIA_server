const { updateProfile, changePassword } = require("../../controllers/user/userPatch.controllers");
const buildResponse = require("../../utils/responseBuilder");

const updateProfileHandler = async (req, res) => {
    try {
        const logUser = req.user;
        const updatedData = req.body;
        const updatedUser = await updateProfile(logUser, updatedData);
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: "Profile updated!",
                data: updatedUser
            })
        );
    } catch (error) {
        return res.status(400).json({
            status: 400,
            error: true,
            message: error.message
        });
    };
};

const changePasswordHandler = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const { id } = req.user;
        const updatedUser = await changePassword({
            userId:id,
            currentPassword,
            newPassword
        });
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: "password changed successfully",
                data: updatedUser
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
    updateProfileHandler,
    changePasswordHandler
};
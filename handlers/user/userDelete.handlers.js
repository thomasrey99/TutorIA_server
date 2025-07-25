const { deleteUser } = require("../../controllers/user/userDelete.controllers");
const buildResponse = require("../../utils/responseBuilder");

const deleteUserHandler = async (req, res) => {
    try {
        const userId = req.user.id;
        console.log(userId)
        await deleteUser(userId);
        return res.status(200).json(
            buildResponse({
                status: 200,
                message: 'User deleted successfully',
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

module.exports = deleteUserHandler;
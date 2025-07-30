const { User, Subject, Material } = require('../../config/database');

const getUserProfile = async (userId) => {
    if (!userId) throw new Error("User id not provided");
    const user = await User.findByPk(userId, {
        attributes: {
            exclude: ['password']
        },
        include: [
            {
                model: Subject,
                include: [Material]
            }
        ]
    });

    if (!user) throw new Error("User not found");

    return user;
};

module.exports = {
    getUserProfile
};

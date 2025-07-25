const { User, Subject } = require('../../config/database');

const getUserProfile = async (userId) => {
    const user = User.findByPk(userId, {
        attributes: {
            exclude: ['password']
        },
        include: [Subject]
    });
    if (!user) throw new Error("User not found");
    return user;
};



module.exports = {
    getUserProfile
}; 
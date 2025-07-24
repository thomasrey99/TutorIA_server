const { User } = require('../../config/database');

const updateProfile = async ({ id }, newData) => {
    const user = await User.findByPk(id, {
        attributes: {
            exclude: ['password']
        }
    });
    if (!user) throw new Error("User not found");
    await user.update(newData);
    return user;
};

module.exports = {
    updateProfile
};
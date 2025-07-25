const { User } = require('../../config/database');
const bcrypt = require("bcrypt");

const updateProfile = async (
    { id },
    newData
) => {
    const user = await User.findByPk(id, {
        attributes: {
            exclude: ['password']
        }
    });
    if (!user) throw new Error("User not found");
    await user.update(newData);
    return user;
};

const changePassword = async ({
    userId,
    currentPassword,
    newPassword
}) => {
    const user = await User.findByPk(userId);
    if (!user) throw new Error('User not found');
    const isCorrectPassword = await bcrypt.compare(currentPassword, user.password);
    if (!isCorrectPassword) throw new Error('Incorrect password');
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();
    return {
        id: user.id,
        email: user.email,
        role: user.role
    };
};

module.exports = {
    updateProfile,
    changePassword
};
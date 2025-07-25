const { User } = require('../../config/database');

const deleteUser = async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) throw new Error('User not found');
    await user.destroy();
}

module.exports = {
    deleteUser
};
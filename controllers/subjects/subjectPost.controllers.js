const { User } = require('../../config/database');

const createSubject = async ({ userId, data }) => {
    if (!data.name) throw new Error('Name subject required');
    const user = await User.findByPk(userId, {
        attributes: {
            exclude: ['password']
        }
    });
    if (!user) throw new Error("User not found");
    const newSubject = await user.createSubject({
        ...data,
        userId
    });
    return newSubject;
}

module.exports = {
    createSubject
}
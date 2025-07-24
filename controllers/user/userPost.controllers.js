const { User } = require('../../config/database');
const bcrypt = require("bcryptjs");

const registerUser = async ({ email, password }) => {
    if (!email && !password) throw new Error("Missing Email or password");
    const existingUser = await User.findOne({
        where: {
            email
        }
    });
    if (existingUser) throw new Error("User already exists");
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
        email,
        password: hashedPassword
    });
    return {
        id: newUser.id,
        email: newUser.email,
        isSubscribed: newUser.isSubscribed
    };
};

module.exports={
    registerUser
}
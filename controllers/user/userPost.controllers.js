const { User } = require('../../config/database');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require('dotenv').config();
const { JWT_SECRET, JWT_EXPIRES_IN } = process.env;

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

const loginUser = async ({ email, password }) => {
    if (!email && !password) throw new Error("Missing Email or password");

    const user = await User.findOne({
        where: {
            email
        }
    });

    if (!user) throw new Error("User not found");

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) throw new Error("Incorrect password");

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRES_IN
        }
    );

    return {
        token,
        user
    };
};

module.exports = {
    registerUser,
    loginUser
};

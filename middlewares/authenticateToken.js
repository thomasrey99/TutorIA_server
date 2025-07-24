const jwt = require('jsonwebtoken');
const buildResponse = require('../utils/responseBuilder');

require('dotenv').config();
const { JWT_SECRET } = process.env;

const authenticateToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json(
            buildResponse({
                status: 401,
                message: "Token not provide!",
                error: true
            })
        )
    };
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json(
            buildResponse({
                status: 403,
                error: true,
                message: "Invalid or expired token",
            })
        );
    };
};

module.exports = authenticateToken;

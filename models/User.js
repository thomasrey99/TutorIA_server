const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define(
        'User',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            role: {
                type: DataTypes.ENUM("client", "admin"),
                defaultValue: "client",
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            address: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            isSubscribed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            }
        },
        {
            freezeTableName: true,
            timestamps: true,
            paranoid: true,
        }
    )
}
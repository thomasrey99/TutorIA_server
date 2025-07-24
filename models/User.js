const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define(
        'User',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: { isEmail: true }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            isSubscribed: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            freezeTableName: true,
            timestamps: true,
            paranoid: true,
        }
    )
}
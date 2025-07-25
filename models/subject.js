const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define(
        'Subject',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            freezeTableName: true,
            timestamps: true,
            paranoid: true,
        }
    );
};
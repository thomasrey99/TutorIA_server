const { DataTypes } = require('sequelize');

module.exports = (database) => {
    database.define(
        'StudyMaterial',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fileUrl: {
                type: DataTypes.STRING,
                allowNull: true
            },
            textContent: {
                type: DataTypes.TEXT,
                allowNull: true
            }
        },
        {
            freezeTableName: true,
            timestamps: true,
            paranoid: true,
        }
    )
}
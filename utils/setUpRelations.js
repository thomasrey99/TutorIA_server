const setUpRelations = (models) => {
    const { User, Material, Subject } = models;
    if (User && Subject) {
        User.hasMany(Subject, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });
        Subject.belongsTo(User, {
            foreignKey: "userId",
        });
    };
    if (Subject && Material) {
        Subject.hasMany(Material, {
            foreignKey: "subjectId",
            onDelete: 'CASCADE'
        });
        Material.belongsTo(Subject, {
            foreignKey: "subjectId",
        });
    };
    if (User && Material) {
        User.hasMany(Material, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        })
        Material.belongsTo(User, {
            foreignKey:"userId"
        })
    }
};

module.exports = setUpRelations;
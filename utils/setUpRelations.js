const setUpRelations = (models) => {
    const { User, StudyMaterial, Subject } = models;
    if (User && Subject) {
        User.hasMany(Subject, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });
        Subject.belongsTo(User, {
            foreignKey: "userId",
        });
    };
    if (Subject && StudyMaterial) {
        Subject.hasMany(StudyMaterial, {
            foreignKey: "subjectId",
            onDelete: 'CASCADE'
        });
        StudyMaterial.belongsTo(Subject, {
            foreignKey: "subjectId",
        });
    };
};

module.exports = setUpRelations;
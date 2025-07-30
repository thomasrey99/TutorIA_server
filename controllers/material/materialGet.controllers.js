const { Material, Subject } = require('../../config/database');

const getMaterialsBySubject = async ({ userId, subjectId }) => {
    const subject = await Subject.findOne({
        where: {
            id: subjectId,
            userId
        }
    });
    if (!subject) throw new Error("Subject not found or does not belong to the user");
    const materials = await Material.findAll({
        where: {
            subjectId
        }
    })
    return materials;
};

module.exports = {
    getMaterialsBySubject
};
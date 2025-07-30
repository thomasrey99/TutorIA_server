const { Subject } = require('../../config/database');

const createMaterial = async ({ userId, subjectId, data }) => {
    if (!subjectId) throw new Error('Subject id not provided');
    if (!data) throw new Error('Data not provided');
    const subject = await Subject.findOne(
        {
            where: {
                id: subjectId,
                userId
            }
        }
    );
    if (!subject) throw new Error('Subject not found or does not belong to the user');
    const newMaterial = subject.createMaterial(data);
    return newMaterial;
}

module.exports = {
    createMaterial
};
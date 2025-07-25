const { Subject, StudyMaterial } = require('../../config/database');

const getSubjectById = async (userId, subjectId) => {
    if (!subjectId || !userId) throw new Error('userId or subjectId not provided');
    const subject = await Subject.findOne(
        {
            where: {
                id: subjectId,
                userId
            },
            include: [StudyMaterial]
        }
    );
    if (!subject) throw new Error('Subject not found');
    return subject;
};

module.exports = {
    getSubjectById
};
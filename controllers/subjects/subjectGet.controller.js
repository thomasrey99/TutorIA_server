const { Subject, Material } = require('../../config/database');

const getSubjectById = async ({userId, subjectId}) => {
    if (!subjectId || !userId) throw new Error('userId or subjectId not provided');
    const subject = await Subject.findOne(
        {
            where: {
                id: subjectId,
                userId
            },
            include: [Material]
        }
    );
    if (!subject) throw new Error('Subject not found or does not belong to this user');
    return subject;
};

module.exports = {
    getSubjectById
};
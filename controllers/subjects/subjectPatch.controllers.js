const { Subject } = require('../../config/database');

const updateSubject = async ({ userId, subjectId, updatedData }) => {
    if (!userId || !subjectId) throw new Error("userId or subjectId not provided");
    const subject = await Subject.findOne({
        where: {
            id: subjectId,
            userId
        }
    });
    if (!subject) throw new Error('Subject not found or does not belong to this user');
    await subject.update(updatedData);
    return subject;
};

module.exports = {
    updateSubject
};
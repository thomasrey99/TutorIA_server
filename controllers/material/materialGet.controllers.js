const { Material, Subject } = require('../../config/database');

const getMaterialById = async ({ materialId, userId }) => {
    if (!materialId || !userId) throw new Error('Id not provided');
    const material = await Material.findOne({
        where: {
            id: materialId,
        },
        include:{
            model:Subject,
            where:{
                userId
            }
        }
    });
    if (!material) throw new Error('Material not found or access denied');
    return material;
};

module.exports = {
    getMaterialById
};
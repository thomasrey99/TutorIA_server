const { Material, Subject } = require('../../config/database');

const updateMaterial = async ({ materialId, userId, updatedData }) => {
    if (!materialId || !userId) throw new Error("id`s not provided");
    if (!updatedData) throw new Error("Data not provided");
    const material = await Material.findOne({
        where: {
            id: materialId
        },
        include: {
            model: Subject,
            where: {
                userId
            }
        }
    });

    if (!material) throw new Error("Material not found or access denied");
    await material.update(updatedData);
    return material;
};

module.exports = {
    updateMaterial
};
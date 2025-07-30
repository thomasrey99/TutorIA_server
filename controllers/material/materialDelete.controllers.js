const { Material } = require('../../config/database');

const deleteMaterial = async ({ userId, materialId }) => {
    if (!userId || !materialId) throw new Error("Id`s not provided");
    const material = await Material.findOne({
        id: materialId,
        userId
    });
    if (!material) throw new Error("Material not found");
    await material.destroy();
};

module.exports = {
    deleteMaterial
};
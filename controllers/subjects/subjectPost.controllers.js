const { Subject, User } = require('../../config/database');

const postSubject = async (userId, data) => {
    const user=await User.findByPk(userId,{
        attributes:{
            exclude:['password']
        }
    });
    if(!user) throw new Error("User not found");
    
}
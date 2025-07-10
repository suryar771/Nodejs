const User = require('../models/user');

async function getAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function getUserById(req,res){
    const user = await User.findById(req.params.id);
   if(!user) return res.status(400).json({error: "user not found"});
    return res.json(user);
}
async function updateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName : "changedd"});
    return res.status(200).json({msg:'done'});
}
module.exports ={
    getAllUsers,
    getUserById,
    updateUserById
} ;
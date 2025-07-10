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
async function deleteUserById(req,res){{
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:'done'});
}
async function createUser(req,res){
    const body = req.body;
    if(
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ){
        return res.status(400).json({msg:"All fields are req..."});
    }
    const result = await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        gender: body.gender,
        email : body.email,
        jobTitle :body.job_title,
    })
    console.log(result)
    return res.status(201).json({msg: "success",id: result._id});
};

}
module.exports ={
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById,
    createUser
};
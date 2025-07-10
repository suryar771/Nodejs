const express = require("express");
const router = express.Router();
const User = require('../models/user');
const {getAllUsers,getUserById,updateUserById} = require('../controllers/user');

router.get('/',getAllUsers);

router.route('/:id')
.get(getUserById)
.patch(updateUserById).delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:'done'});
});
router.post('/',async (req,res)=>{
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
    return res.status(201).json({msg: "success"});
});
router.get('/', async (req,res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);

});
module.exports = router;

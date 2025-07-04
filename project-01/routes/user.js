const express = require("express");
const router = express.Router();
router.get('/users',async (req,res) => {
    const allDbUsers  = await User.find({})
    const html = `
   
    <ul>
        ${allDbUsers.map((user) => `<li>${user.firstName} ${user.lastName}</li>`).join('')}
    </ul>
    `;
    return res.send(html);
});
router.route('/api/users/:id')
.get(async (req,res) => {
  const user = await User.findById(req.params.id);
   if(!user) return res.status(400).json({error: "user not found"});
    return res.json(user);

}).patch(async(req,res)=>{
    await User.findByIdAndUpdate(req.params.id,{lastName : "changedd"});
    return res.status(200).json({msg:'done'});
}).delete(async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg:'done'});
});
router.post('/api/users',async (req,res)=>{
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
        email : body.email,
        gender: body.gender,
        jobTitle :body.job_title,
    })
    console.log(result)
    return res.status(201).json({msg: "success"});
});
router.get('/api/users', async (req,res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);

});
module.exports = router;

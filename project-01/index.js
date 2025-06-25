const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");
const fs = require("fs");

const port = 8000;
mongoose.connect('mongodb://127.0.0.1:27017/project-01')
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log("Mongo Error",err))

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName: {
        type:String,
    },
    email :{
        type:String,
        required:true,
        unique: true,
    },
    jobTitle:{
        type : String,
    },
    gender: {
        type : String,
    },
});
const User = mongoose.model('user',userSchema);
app.use(express.urlencoded({extended: false}));

app.get('/users', (req,res) => {
    const html = `
   
    <ul>
        ${users.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
    </ul>
    `;
    return res.send(html);
});
app.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);

}).patch((req,res)=>{
    return res.json({status: "pending"});
}).delete((req,res)=>{
    return res.json({status: "pending"});
});
app.post('/api/users',async (req,res)=>{
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
    await User.create({
        firstName : body.first_name,
        lastName : body.last_name,
        email : body.email,
        gender: body.gender,
        jobTitle :body.job_title,
    })
    console.log('resukt')
    return res.status(201).json({msg: "success"});
});
app.get('/api/users', (req,res) => {
   return res.json(users);
});


app.listen(port, () => {console.log(`Server is running on port ${port}`)});   
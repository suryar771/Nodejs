const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

const port = 8000;
app.get('/users', (req,res) => {
    const html = `
   
    <ul>
        ${users.map((user) => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
    </ul>
    `;
    return res.send(html);
});
app.route('/api/users/:id').get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);

}).patch((req,res)=>{
    return res.json({status: "pending"});
}).delete((req,res)=>{
    return res.json({status: "pending"});
});
app.post('/api/users',(req,res)=>{
    return res.json({status: "pending"});
});
app.get('/api/users', (req,res) => {
   return res.json(users);
});


app.listen(port, () => {console.log(`Server is running on port ${port}`)});   
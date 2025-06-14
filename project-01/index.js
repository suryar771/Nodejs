const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");

const port = 8000;
app.get('/users', (req,res) => {
    res.json(users);
});


app.listen(port, () => {console.log(`Server is running on port ${port}`)}); 
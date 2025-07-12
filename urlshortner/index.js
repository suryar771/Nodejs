const express = require("express")
const{connectTOMongoDB} = require("./connect");
const urlRoute = require('./router/url');
connectTOMongoDB('mongodb://127.0.0.1:27017/short-url').then(()=> console.log("Mongodb is successfully connected"));
const app = express();
const PORT = 8001;
app.use("/url",urlRoute);
app.listen(PORT, () => console.log('Server started at 8001'))
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const fs = require("fs");
const userRouter = require('./routes/user');
const port = 8000;
mongoose.connect('mongodb://127.0.0.1:27017/project-01')
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log("Mongo Error",err))


app.use(express.urlencoded({extended: false}));

app.use('/users',userRouter);

app.listen(port, () => {console.log(`Server is running on port ${port}`)});   
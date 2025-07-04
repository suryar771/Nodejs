const express = require("express");
const app = express();
const connectDB = require('./connection');

const fs = require("fs");
const userRouter = require('./routes/user');
const port = 8000;

connectDB('mongodb://127.0.0.1:27017/project-01');


app.use(express.urlencoded({extended: false}));

app.use('/users',userRouter);

app.listen(port, () => {console.log(`Server is running on port ${port}`)});   
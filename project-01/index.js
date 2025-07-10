const express = require("express");
const app = express();
const logReqRes = require('./middleware');
const connectDB = require('./connection');


const userRouter = require('./routes/user');
const port = 8000;

connectDB('mongodb://127.0.0.1:27017/project-01').then(()=> console.log("mongodb is connected"));

app.use(express.urlencoded({extended: false}));
app.use(logReqRes('log.txt'));
app.use('/api/users',userRouter);

app.listen(port, () => {console.log(`Server is running on port ${port}`)});   
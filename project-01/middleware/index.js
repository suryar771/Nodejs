const fs = require("fs");
const { model } = require("mongoose");

function logReqRes(filename){
    return (req,res,next)=>{
        fs.appendFile(
            filename,
            `\n${new Date().toLocaleString()} ${req.method} ${req.url} ${res.statusCode}`,
            (err)=>{
                if(err) throw err;
            }
        )
        next();
    }
}
module.exports = logReqRes;
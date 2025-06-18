const http = require('http');
const fs = require("fs")
 
const server = http.createServer((req, res) => {
    fs.appendFile("log.txt", "New req \n", (err, data) => {
        if(err) {
            console.log(err);
        }
        console.log(data);
    });
       switch(req.url) {
        case "/":
            res.end("Hello World");
            break;
        case "/about":
            res.end("About");
             break;
       default:
        res.end("404 Not Found");
        break;
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});



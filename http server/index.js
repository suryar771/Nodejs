const http = require('http');
const fs = require("fs")
 
const server = http.createServer((req, res) => {
    fs.appendFile("log.txt", "New req \n", (err, data) => {
       switch(req.url) {
        case "/":
            res.end("Hello World");
            break;
        case "/about":
            res.end("About");
       }
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});



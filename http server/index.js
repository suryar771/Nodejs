const http = require('http');
const fs = require("fs")
 
const server = http.createServer((req, res) => {
    fs.appendFile("log.txt", "New req \n", (err, data) => {
        if (err) {
            res.end("Error");
        } else {
            res.end("Hello World");
        }
    });
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});



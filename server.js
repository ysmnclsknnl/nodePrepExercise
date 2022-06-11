/**
 * Exercise 3: Create an HTTP web server
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const createResponseToARequest = (fileName, contentType, res) => {
  fs.readFile(path.join(__dirname, fileName), (err, content) => {
    if (err) throw err;
    res.writeHead(200, { "Content-type": contentType });
    res.end(content);
  });
};

let server = http.createServer(function (req, res) {
  if (req.url === "/") {
    createResponseToARequest("index.html", "text/html", res);
  }
  if (req.url === "/index.js") {
    createResponseToARequest("index.js", "application/javascript", res);
  }
  if (req.url === "/style.css") {
    createResponseToARequest("style.css", "text/css", res);
  }
});

server.listen(3000, () => console.log("server running")); // The server starts to listen on port 3000

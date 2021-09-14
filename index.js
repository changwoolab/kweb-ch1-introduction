const http = require("http");
const template = require("./module")

const hostname = "127.0.0.1";
const port = 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "html");
    res.end(template.html());
});

server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});

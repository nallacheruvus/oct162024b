const http = require("http");
const { retPArr } = require("./data");
const server = http.createServer((req, res) => {
    let arr = retPArr();
    res.writeHead(200, { "content-type": "text/json" });
    res.end(JSON.stringify(arr));
});
server.listen(3000, () => {
    console.log("JSON resp is running");
});
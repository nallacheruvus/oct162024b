//Creating a http server with nodejs
const http = require("http");
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    //res.end("<h1 style=\"background-color:yellow;color:blue\">Welcome to nodejs http server</h1>");
    let str = "<center><table border=1  style=\"background-color:yellow;color:blue;border-width:2px\"><thead><tr><th></th><th></th></tr></thead><tbody>";
    for (let i = 0; i < 100; i++) {
        str += "<tr><td>Log(" + (i + 1) + ")</td><td>" + Math.log(i + 1) + "</td></tr>";
    }
    str += "</tbody></table></center>";
    res.end(str);
});
server.listen(8090, () => {
    console.log("Server is up!");
});


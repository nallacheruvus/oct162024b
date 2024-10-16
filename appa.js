const http = require("http");
const head = "<br/><hr/><br/><h1>Welcome to Satish LLP &#169; company website<br/><hr/><br/></h1><center><table><tr><td><a href=\"/\">Home</a></td><td><a href=\"/about\">About</a></td><td><a href=\"/contact\">Contact</a></td><td><a href=\"/proj\">Projects</a></td></tr></table></center>";
http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    if (req.url === '/') {
        res.write(head + "<br/><h1 style=\"background-color:yellow;color:blue\">This is home page</h1>");
        res.end("<br/><hr/><br/>")
    }
    else if (req.url === '/about') {
        res.write(head + "<br/><h1 style=\"background-color:red;color:yellow\">This is about us page</h1>");
    }
    else if (req.url === '/contact') {
        res.write(head + "<br/><h1 style=\"background-color:green;color:yellow\">This is contactus page</h1>");
    }
    else if (req.url === '/proj') {
        res.write(head + "<br/><h1 style=\"background-color:blue;color:red\">This is Projects page</h1>");
    }
    else {
        res.end("Not a valid page");
    }
}).listen(3000, () => {
    console.log("Pages are up!");
});




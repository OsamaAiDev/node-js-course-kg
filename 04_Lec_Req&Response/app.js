const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Req headers\n", req.headers);
  console.log("Req url === \n", req.url);
  console.log("req method=== \n", req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home</title></head>");
    res.write("<body><h1>Home Page</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/products") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Product</title></head>");
    res.write("<body><h1>Products Page</h1></body>");
    res.write("</html>");
    // response send kr ap is ma mazeed headers add nai kr sakta hn
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>404</title></head>");
    res.write("<body><h1>Page Not Found</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

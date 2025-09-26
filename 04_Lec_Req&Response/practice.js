const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Req Url ====\n", req.url);
  if (req.url === "/home") {
    res.write("<h1>Welcome to home page</h1>");
    return res.end();
  } else if (req.url === "/men") {
    res.write("<h1>Welcome to men page</h1>");
    return res.end();
  } else if (req.url === "/women") {
    res.write("<h1>Welcome to women page</h1>");
    return res.end();
  } else if (req.url === "/kids") {
    res.write("<h1>Welcome to kids page</h1>");
    return res.end();
  } else if (req.url === "/cart") {
    res.write("<h1>Welcome to cart page</h1>");
    return res.end();
  }
  res.write(`
<html>
  <head>
    <title>Document</title>
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="http://localhost:3000/home">Home</a></li>
        <li><a href="http://localhost:3000/men">Men</a></li>
        <li><a href="http://localhost:3000/women">Women</a></li>
        <li><a href="http://localhost:3000/kids">Kids</a></li>
        <li><a href="http://localhost:3000/cart">Cart</a></li>
      </ul>
    </nav>
  </body>
</html>
 `);
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});

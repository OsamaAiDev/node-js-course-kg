const http = require("http");
const fs = require("fs");
const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log("Req headers\n", req.headers);
  console.log("Req url === \n", req.url);
  console.log("req method=== \n", req.method);

  if (req.url === "/") {
    res.write("<h1>Welcome to Home page</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" id="name" name="name" placeholder="Enter your name"><br><br>'
    );
    res.write('<label for="gender">Gender:</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="female">Female</label><br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user-details.txt", "Osama");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

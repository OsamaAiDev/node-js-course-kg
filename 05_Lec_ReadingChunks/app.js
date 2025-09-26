const http = require("http");

const PORT = 3000;
const server = http.createServer((req, res) => {
  if (req.url.toLowerCase() === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <form action="/submit-details" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="radio" name="gender" value="male" /> Male
      <input type="radio" name="gender" value="female" /> Female
      <input type="submit" value="submit" />
    </form>
      `);
    return res.end();
  } else if (
    req.method === "POST" &&
    req.url.toLowerCase() == "/submit-details"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.end("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

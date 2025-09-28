const fs = require("fs");

const userReqHandler = (req, res) => {
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
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params);
      console.log("body object", bodyObject);

      fs.writeFile("user.txt", JSON.stringify(bodyObject), (err) =>
        console.log("data written successfuly")
      );
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <h1> Keep Learning </h1>
      `);
    return res.end();
  }
};

module.exports = userReqHandler;

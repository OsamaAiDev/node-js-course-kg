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
      // console.log("params", params);
      // console.log("params entries", params.entries());
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //   bodyObject[key] = val;
      // }
      // short code
      const bodyObject = Object.fromEntries(params);
      console.log("body object", bodyObject);
      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
};

module.exports = userReqHandler;

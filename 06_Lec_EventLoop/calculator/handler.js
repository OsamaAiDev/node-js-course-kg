const fs = require("fs");
const { sumReqHandler } = require("./sum");
const reqHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url.toLowerCase() === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head><title>Calculator Project</title></head>
      <body>
      <h1>Welcome to homepage</h1>
      <a href="/calculator">Go to Calculator Page</a>
      </body>
      </html>
      `);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <h1>Calculator Page</h1>
       <form action="/calculate-result" method="post">
      <input type="text" name="firstNo" placeholder = "First No"/>
      <input type="text" name="secondNo" placeholder = "Second No"/>
      <input type="submit" value="calculate" />
      </form>
      `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumReqHandler(req, res);
  }

  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
      <head><title>Calculator Project</title></head>
      <body>
      <h1>404 Page Not Found</h1>
      <a href="/">Go to Home Page</a>
      </body>
      </html>
      `);
  return res.end();
};

module.exports = reqHandler;

const sumReqHandler = (req, res) => {
  // console.log("In sum req handler", req.url);
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    const { firstNo, secondNo } = bodyObject;
    const result = parseInt(firstNo) + parseInt(secondNo);
    res.setHeader("Content-Type", "text/html");
    res.write(`
      <html>
      <head><title>Calculator Project</title></head>
      <body>
      <h1>Result : ${result}</h1>
      
      </body>
      </html>
      `);
    return res.end();
  });
};

exports.sumReqHandler = sumReqHandler;

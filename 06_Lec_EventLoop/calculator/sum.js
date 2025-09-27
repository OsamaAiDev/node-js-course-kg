// callback tb execu ho ga jb data a jaye ga bd ma execute ho ga direct execu nai ho ga.

sumReqHandler = (req, res) => {
  // console.log("In sum req handler", req.url);
  console.log("1. inside sum handler");

  const body = [];
  let result;
  req.on("data", (chunk) => {
    console.log("2. chunk came");

    body.push(chunk);
  });
  req.on("end", () => {
    console.log("2. chunk came");
    console.log("3. end ");

    const fullBody = Buffer.concat(body).toString();
    const params = new URLSearchParams(fullBody);
    const bodyObject = Object.fromEntries(params);
    const { firstNo, secondNo } = bodyObject;
    result = parseInt(firstNo) + parseInt(secondNo);

    return res.end();
  });

  console.log("4 sending response");

  res.setHeader("Content-Type", "text/html");
  res.write(`
      <html>
      <head><title>Calculator Project</title></head>
      <body>
      <h1>Result : ${result}</h1>
      
      </body>
      </html>
      `);
};

exports.sumReqHandler = sumReqHandler;

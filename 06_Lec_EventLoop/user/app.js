const http = require("http");
const PORT = 3000;
const userReqHandler = require("./user");

const server = http.createServer(userReqHandler);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

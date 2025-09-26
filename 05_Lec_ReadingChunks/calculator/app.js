const http = require("http");
const reqHandler = require("./handler");
const PORT = 3000;

const server = http.createServer(reqHandler);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

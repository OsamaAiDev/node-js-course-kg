// simple node server

const http = require("http");
const PORT = 3000;

// create server func return an obj
// after loging first req server log req and then stop
const server = http.createServer((req, res) => {
  // kill server
  process.exit();
});

server.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);

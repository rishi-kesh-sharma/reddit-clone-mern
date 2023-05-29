const app = require("./app");
const http = require("http");
const { PORT } = require("./utils/config");
const connectToDB = require("./db");
const dotenv = require("dotenv");

dotenv.config();
connectToDB();

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

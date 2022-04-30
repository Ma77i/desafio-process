const cluster = require("cluster");
const { cpus } = require("os");

const server = require("./app");
const dotenv = require('dotenv').config()

const numCPUs = cpus().length;
const PORT = process.argv[2] || 8080;
const MODE = process.argv[3] || "FORK";

if (MODE !== "FORK") {
  if (cluster.isPrimary) {
    console.log(`This is primary process: ${process.pid}`);

    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
      console.log(`worker ${worker.process.pid} died`);
    });
  } else {
    server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
    //console.log(`This is the Worker process: ${process.pid}`);
  }
} else {
  server.listen(process.env.PORT, () => console.log(`Listening on http://localhost:${PORT}`));
}

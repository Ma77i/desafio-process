const { Router } = require("express");
const router = Router();

const { fork } = require("child_process");
const cluster = require("cluster");
const http = require("http");
const { cpus } = require("os");

const numCPUs = cpus().length;
const PORT = process.argv[2] || 8000;
const { getRandom } = require("../random.js");

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {

  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`hello world\n ${process.pid}\n ${getRandom}`);
    })
    .listen(process.env.PORT, () => console.log(`Server running on http://localhost:8080`));

  console.log(`Worker ${process.pid} started`);
  console.log(`Listening on http://localhost:${PORT}`);
  //process.exit()
  router.get("/", (req, res) => {
    const { query } = req;
    console.log(query);
  
    console.time("time");
    const random = fork("random.js");
    random.send({
      message: "start",
      num: +query.num
    });
    random.on("message", (message) => {
      //console.log(message)
      res.send(message);
    });
    console.timeEnd("time");
  });
}


module.exports = router;

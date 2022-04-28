const { Router } = require("express");
const router = Router();

const { fork } = require("child_process");


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

module.exports = router;

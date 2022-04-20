const { Router } = require("express")

const controller = require("../controllers/chat")
const router = Router()


// MONGO
router.get("", controller.get)
router.post("", controller.post)
router.get("/:id", controller.getById)
router.delete("/:id", controller.deleteById)
router.delete("", controller.deleteAll)


module.exports = router
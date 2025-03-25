const router = require("express").Router();
const controller = require("../controllers/user.controller");

router.post("/",controller.create);
router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.put("/:id", controller.update);
router.delete("/:id", controller.deleted);

module.exports=router;
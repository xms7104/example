const express = require("express");
const router = express.Router();
const entityController = require("../controller/index");

router.get("/user", entityController.getAll);
router.get("/user/:id", entityController.getById);
router.post("/user", entityController.create);
router.put("/user/:id", entityController.update);
router.delete("/user/:id", entityController.delete);

module.exports = router;
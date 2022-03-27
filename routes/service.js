const express = require("express");
const router = express.Router();
const service = require("../controllers/service");

router.get("/", service.getAll);
router.get("/:id", service.get);
router.post("/", service.create);
router.patch("/:id", service.update);
router.delete("/:id", service.delete);

module.exports = router;

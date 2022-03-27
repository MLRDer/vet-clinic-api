const express = require("express");
const router = express.Router();
const client = require("../controllers/client");

router.get("/", client.getAll);
router.get("/:id", client.get);
router.post("/", client.create);
router.patch("/:id", client.update);
router.delete("/:id", client.delete);

module.exports = router;

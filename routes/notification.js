const express = require("express");
const router = express.Router();
const notification = require("../controllers/notification");

router.get("/", notification.getAll);
router.get("/:id", notification.get);
router.post("/", notification.create);
router.patch("/:id", notification.update);
router.delete("/:id", notification.delete);

module.exports = router;

const express = require("express");
const router = express.Router();
const appointment = require("../controllers/appointment");

router.get("/", appointment.getAll);
router.get("/:id", appointment.get);
router.post("/", appointment.create);
router.patch("/:id", appointment.update);
router.delete("/:id", appointment.delete);

module.exports = router;

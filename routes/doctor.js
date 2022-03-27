const express = require("express");
const router = express.Router();
const doctor = require("../controllers/doctor");

router.get("/", doctor.getAll);
router.get("/:id", doctor.get);
router.post("/auth", doctor.auth);
router.post("/", doctor.create);
router.patch("/:id", doctor.update);
router.delete("/:id", doctor.delete);

module.exports = router;

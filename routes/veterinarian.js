const express = require("express");
const router = express.Router();
const veterinarian = require("../controllers/veterinarian");

router.get("/", veterinarian.getAll);
router.get("/:id", veterinarian.get);
router.post("/auth", veterinarian.auth);
router.post("/", veterinarian.create);
router.patch("/:id", veterinarian.update);
router.delete("/:id", veterinarian.delete);

module.exports = router;

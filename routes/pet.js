const express = require("express");
const router = express.Router();
const pet = require("../controllers/pet");

router.get("/", pet.getAll);
router.get("/:id", pet.get);
router.post("/", pet.create);
router.patch("/:id", pet.update);
router.delete("/:id", pet.delete);

module.exports = router;

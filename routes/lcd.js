const express = require("express");
const router = express.Router();
const {
  getLcd,
  createLcd,
  getEditLcd,
  editLcdDetails,
} = require("../controllers/lcd");
const lcd = require("../models/lcd");

router.post("/", createLcd);
router.get("/", getLcd);
router.get("/:id", getEditLcd);
router.put("/:id", editLcdDetails);


module.exports = router;

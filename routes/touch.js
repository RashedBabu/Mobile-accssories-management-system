const express = require("express");
const { get } = require("mongoose");
const router = express.Router();
const {
  getTouch,
  createTouch,
  getEditTouch,
  editTouchDetails,
} = require("../controllers/touch");
const touch = require("../models/touch");

router.post("/", createTouch);
router.get("/", getTouch);
router.get("/:id", getEditTouch);
router.put("/:id", editTouchDetails);

module.exports = router;

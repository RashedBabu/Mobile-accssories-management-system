const mongoose = require("mongoose");

const touchSchema = new mongoose.Schema(
  {
    boxNumber: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    modelName: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,

      required: true,
    },
    allQuantity: {
      type: Number,

      required: true,
    },
    price: {
      type: Number,

      required: true,
    },
    date: {
      type: String,
    },
  },
  { timestamps: true }
);

const touch = mongoose.model("touch", touchSchema);

module.exports = touch;

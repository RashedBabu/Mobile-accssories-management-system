const mongoose = require("mongoose");

const displaySchema = new mongoose.Schema(
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
      type: String,

      required: true,
    },
    allQuantity: {
      type: String,

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

const display = mongoose.model("display", displaySchema);

module.exports = display;

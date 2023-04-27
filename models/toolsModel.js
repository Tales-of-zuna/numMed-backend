const mongoose = require("mongoose");

var toolsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
      require: true,
    },
    brand: {
      type: String,
      required: true,
    },
    presentation_images: {
      type: Object,
    },
    serial: { type: String },
    quantity: { type: Number, required: true },
    sold: { type: Number, default: 0 },
    images: {
      type: Array,
    },
    ratings: [
      {
        star: Number,
        comment: String,
        postedby: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Tools", toolsSchema);

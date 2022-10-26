const { Schema, model } = require("mongoose");

// change field names as you see fit.
const projectSchema = new Schema(
  {
    _id: String,
    name: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    icon1: {
      type: String,
      required: true,
    },
    icon2: {
      type: String,
      required: true,
    },
    icon3: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    _id: false,
  }
);

module.exports = model("Project", projectSchema);

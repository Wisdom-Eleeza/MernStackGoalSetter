// const { timeStamp } = require("console");
const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value "],
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);

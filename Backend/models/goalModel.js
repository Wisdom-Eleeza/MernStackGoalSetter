const mongoose = require("mongoose");

// with every goal we have to know which user created that goal
//every goal is going to be associated with a specific user
const goalSchema = mongoose.Schema(
  {
    user: { 
      type: mongoose.Schema.Types.ObjectId, 
      required: true,
      ref: 'User' 
    },
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

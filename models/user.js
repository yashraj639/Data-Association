const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL);

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post",
    },
  ],
});

module.exports = mongoose.model("user", userSchema);

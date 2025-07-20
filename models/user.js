const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://yashrajyadav4660:1fyIQ4s564gwcU3l@cluster0.im5nbih.mongodb.net/database"
);

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

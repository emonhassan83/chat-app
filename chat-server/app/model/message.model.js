const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    message: { type: String, required: true },
    receiver: {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      name: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
    },
    sender: {
      _id: { type: mongoose.Schema.Types.ObjectId, required: true },
      name: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema);

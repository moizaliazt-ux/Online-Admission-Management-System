const mongoose = require("mongoose");

const MeritListSchema = new mongoose.Schema({
  programName: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    enum: ["Morning", "Evening"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Pending", "Available"],
    default: "Pending",
  },
  schedule: {
    type: String,
    default: "To be announced",
  },
});

module.exports = mongoose.model("MeritList", MeritListSchema);

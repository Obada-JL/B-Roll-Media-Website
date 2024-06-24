const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
  },
  date: {
    type: String,
  },
  modalType: {
    type: String,
  },
  modalLink: {
    type: String,
  },
  picture: {
    type: String,
  },
});
module.exports = mongoose.model("Projects", projectSchema);

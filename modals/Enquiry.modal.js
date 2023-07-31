// modal.schema.js
const mongoose = require("mongoose");

const ModalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Modal = mongoose.model("Modal", ModalSchema);

module.exports = Modal;

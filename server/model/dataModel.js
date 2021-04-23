const mongoose = require("mongoose");

const pdfLinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  dLink: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = PdfLink = mongoose.model("pdfLink", pdfLinkSchema, "pdfLink");

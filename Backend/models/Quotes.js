const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  company: String,
  jobTitle: String,
  email: String,
  phone: String,
  category: String,
  description: String,
  quantity: Number,
  timeline: Date,
  requirements: [String],
  filePaths: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Quote', quoteSchema);

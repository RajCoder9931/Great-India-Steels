const express = require('express');
const multer = require('multer');
const path = require('path');
const Quote = require('../models/Quotes');
const fs = require('fs');
const router = express.Router();
const uploadDir = path.join(__dirname, '..', 'uploads');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
} 


const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) =>
    cb(null, `${Date.now()}-${file.originalname}`),
});
const upload = multer({ storage });

router.post('/', upload.array('files'), async (req, res) => {
  try {
    const filePaths = req.files.map(file => file.path);
    const {
      firstName, lastName, company, jobTitle,
      email, phone, category, description,
      quantity, timeline, requirements
    } = req.body;

    const newQuote = new Quote({
      firstName,
      lastName,
      company,
      jobTitle,
      email,
      phone,
      category,
      description,
      quantity,
      timeline,
      requirements: Array.isArray(requirements) ? requirements : [requirements],
      filePaths
    });

    await newQuote.save();
    res.status(200).json({ message: 'Quote submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Submission failed' });
  }
});

router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch Quotes" });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const enquiry = await Quote.findById(req.params.id);
    if (!enquiry) return res.status(404).json({ error: 'Enquiry not found' });
    res.json(enquiry);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch enquiry' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updated = await Quote.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update enquiry' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Quote.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Enquiry not found' });
    res.json({ message: 'Enquiry deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete enquiry' });
  }
});

module.exports = router;

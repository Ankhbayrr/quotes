// routes/quoteRoutes.js

const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

// Get a random quote
router.get('/random', async (req, res) => {
  try {
    const count = await Quote.countDocuments();
    const randomIndex = Math.floor(Math.random() * count);
    const randomQuote = await Quote.findOne().skip(randomIndex);
    res.json(randomQuote);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new quote
router.post('/', async (req, res) => {
  const { text, author } = req.body;
  const newQuote = new Quote({ text, author });

  try {
    const savedQuote = await newQuote.save();
    res.status(201).json(savedQuote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all quotes
router.get('/', async (req, res) => {
  try {
    const quotes = await Quote.find();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

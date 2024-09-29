const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Search books by name or term in book name
router.get('/search', async (req, res) => {
  const { term } = req.query;
  try {
    const books = await Book.find({ bookName: { $regex: term, $options: 'i' } });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search books by rent price range
router.get('/rent', async (req, res) => {
  const { min, max } = req.query;
  try {
    const books = await Book.find({ rentPerDay: { $gte: min, $lte: max } });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Search books by category, name/term, and rent per day range
router.get('/filter', async (req, res) => {
  const { category, term, minRent, maxRent } = req.query;
  try {
    const books = await Book.find({
      category,
      bookName: { $regex: term, $options: 'i' },
      rentPerDay: { $gte: minRent, $lte: maxRent }
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

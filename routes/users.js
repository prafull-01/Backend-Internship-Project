const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a user by ID or name for validation
router.get('/:idOrName', async (req, res) => {
  const query = isNaN(req.params.idOrName)
    ? { name: req.params.idOrName }
    : { userId: req.params.idOrName };

  try {
    const user = await User.findOne(query);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

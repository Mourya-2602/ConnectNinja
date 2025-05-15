const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = express.Router();

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// Register new user
router.post('/register', async (req, res) => {
  try {
    const { name, mail, password } = req.body;
    const user = new User({ name, mail, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login user
router.post('/login', async (req, res) => {
  try {
    const { mail, password } = req.body;
    const user = await User.findOne({ mail, password });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful', name: user.name });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router; 
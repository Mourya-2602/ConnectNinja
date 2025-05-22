const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

const validateMessage = (req, res, next) => {
  const { name, email, subject, message } = req.body;
  
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required'
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email format'
    });
  }

  next();
};

router.post('/', validateMessage, async (req, res) => {
  try {
    const message = new Message(req.body);
    await message.save();
    res.status(201).json({ 
      success: true, 
      message: 'Message sent successfully',
      data: {
        id: message._id,
        name: message.name,
        email: message.email,
        subject: message.subject,
        createdAt: message.createdAt
      }
    });
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(400).json({ 
      success: false, 
      error: 'Failed to save message. Please try again.' 
    });
  }
});

module.exports = router; 
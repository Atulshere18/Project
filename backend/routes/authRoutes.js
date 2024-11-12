const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Registration Route
router.post('/register', async (req, res) => {
    const { name, dob, email, password } = req.body;
    console.log(name, dob, email, password); // Log the request body
    
    try {
      // Your registration logic here
    } catch (error) {
      console.error('Error occurred:', error);
      res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
    }
  });
  

// Login Route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required' });
    }
  
    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ success: false, message: 'User not found' });
      }
  
      // Compare the entered password with the stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ success: false, message: 'Invalid credentials' });
      }
  
      // Create JWT token
      const payload = {
        name: user.name,
        email: user.email,
      };
  
      const token = jwt.sign(payload, 'your_jwt_secret', { expiresIn: '1h' });
  
      // Respond with success and the token
      res.status(200).json({
        success: true,
        message: 'Login successful',
        token: token,
        user: {
          name: user.name,
          email: user.email,
        },
      });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ success: false, message: 'An error occurred. Please try again.' });
    }
  });

module.exports = router;

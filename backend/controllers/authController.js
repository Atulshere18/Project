const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Registration Logic
exports.registerUser = async (req, res) => {
  try {
    const { name, dob, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ name, dob, email, password: hashedPassword });
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: newUser._id }, 'your_jwt_secret');

    res.json({ token, user: { name, dob, email } });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error });
  }
};

// Login Logic
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, 'your_jwt_secret');

    res.json({ token, user: { name: user.name, dob: user.dob, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
};

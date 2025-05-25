// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// require('dotenv').config();


// // Admin Login Route (Hardcoded)
// router.post('/admin-login', async (req, res) => {
//     const { email, password } = req.body;

//     // Hardcoded admin credentials
//     const adminEmail = "admin@fitvis.com";
//     const adminPassword = "admin123";

//     if (email === adminEmail && password === adminPassword) {
//         // Generate admin token
//         const token = jwt.sign({ email, role: 'admin' }, process.env.JWT_SECRET, {
//             expiresIn: '7d'
//         });

//         return res.json({
//             message: 'Admin login successful.',
//             token,
//             user: {
//                 name: 'Admin',
//                 email: adminEmail,
//                 role: 'admin'
//             }
//         });
//     } else {
//         return res.status(401).json({ message: 'Invalid admin credentials.' });
//     }
// });


// // Register Route
// router.post('/register', async (req, res) => {
//     const { name, email, password, role } = req.body;

//     if (!name || !email || !password || !role) {
//         return res.status(400).json({ message: 'Please enter all fields.' });
//     }

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) return res.status(400).json({ message: 'Email already registered.' });

//         // Hash password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPassword = await bcrypt.hash(password, salt);

//         // Create user
//         const newUser = new User({
//             name,
//             email,
//             password: hashedPassword,
//             role
//         });

//         await newUser.save();

//         // Generate token
//         const token = jwt.sign({ id: newUser._id, role: newUser.role }, process.env.JWT_SECRET, {
//             expiresIn: '7d'
//         });

//         res.status(201).json({
//             message: 'User registered successfully.',
//             token,
//             user: {
//                 id: newUser._id,
//                 name: newUser.name,
//                 email: newUser.email,
//                 role: newUser.role
//             }
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error.' });
//     }
// });

// // Login Route
// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Find user
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ message: 'Invalid credentials.' });

//         // Compare passwords
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ message: 'Invalid credentials.' });

//         // Generate token
//         const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
//             expiresIn: '7d'
//         });

//         res.json({
//             message: 'Login successful.',
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 email: user.email,
//                 role: user.role
//             }
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error.' });
//     }
// });

// module.exports = router;

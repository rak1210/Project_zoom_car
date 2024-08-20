const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const vehicleRoutes = require('./routes/vehicleRoutes'); // Ensure this path is correct
const authRoutes = require('./routes/authRoutes');       // Ensure this path is correct
//const paymentRoutes = require('./routes/paymentRoutes'); // Ensure this path is correct
const bookingRoutes = require('./routes/bookingRoutes'); // Ensure this path is correct
const reviewRoutes = require('./routes/reviewRoutes');     // Ensure this path is correct

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/vehicles', vehicleRoutes); // Correct usage
app.use('/api/bookings', bookingRoutes); // Correct usage
app.use('/api/reviews', reviewRoutes);    // Correct usage
//app.use('/api/payment', paymentRoutes);   // Correct usage
app.use('/api/auth', authRoutes);         // Correct usage


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err.message));

// Basic error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
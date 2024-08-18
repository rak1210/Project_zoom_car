const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Add a review
router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all reviews for a vehicle
router.get('/vehicle/:vehicleId', async (req, res) => {
  try {
    const reviews = await Review.find({ vehicleId: req.params.vehicleId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
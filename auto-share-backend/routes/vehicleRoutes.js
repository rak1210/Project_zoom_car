const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// Define your routes
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search and filter vehicles
router.get('/search', async (req, res) => {
  try {
    const { category, minPrice, maxPrice } = req.query;
    const query = {};
    if (category) query.category = category;
    if (minPrice) query.price = { $gte: Number(minPrice) };
    if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };

    const vehicles = await Vehicle.find(query);
    res.json(vehicles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 
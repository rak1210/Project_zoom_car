const Vehicle = require('../models/Vehicle'); // Import your Vehicle model

// Get all vehicles
exports.getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Search vehicles with query parameters
exports.searchVehicles = async (req, res) => {
  const { category, minPrice, maxPrice } = req.query;

  try {
    const query = {};
    if (category) query.category = category;
    if (minPrice) query.price = { $gte: Number(minPrice) };
    if (maxPrice) query.price = { ...query.price, $lte: Number(maxPrice) };

    const vehicles = await Vehicle.find(query);
    res.status(200).json(vehicles);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
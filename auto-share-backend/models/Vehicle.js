const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  availability: { type: Boolean, required: true, default: true },
  price: { type: Number, required: true },
  imageUrl: { type: String } 
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
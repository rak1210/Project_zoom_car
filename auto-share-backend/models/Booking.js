const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  vehicleId: mongoose.Schema.Types.ObjectId,
  startDate: Date,
  endDate: Date,
  status: {
    type: String,
    enum: ['booked', 'cancelled'],
    default: 'booked'
  }
});

module.exports = mongoose.model('Booking', bookingSchema);
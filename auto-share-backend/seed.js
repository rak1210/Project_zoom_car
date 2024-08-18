const mongoose = require('mongoose');
const Vehicle = require('./models/Vehicle'); // Adjust the path according to your project structure

const MONGO_URI = 'mongodb://localhost:27017/auto-share-car';

const seedVehicles = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // Clear existing data
    await Vehicle.deleteMany({});

    // Sample vehicle data
    const vehicles = [
      {
        name: 'Toyota Corolla',
        category: 'Sedan',
        price: 30,
        availability: true
      },
      {
        name: 'Honda Civic',
        category: 'Sedan',
        price: 35,
        availability: true
      },
      {
        name: 'Ford Explorer',
        category: 'SUV',
        price: 50,
        availability: false
      },
      {
        name: 'Chevrolet Malibu',
        category: 'Sedan',
        price: 40,
        availability: true
      },
      {
        name: 'Tesla Model 3',
        category: 'Electric',
        price: 70,
        availability: true
      }
    ];

    // Insert sample data into MongoDB
    await Vehicle.insertMany(vehicles);

    console.log('Sample data inserted successfully!');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error inserting sample data:', error);
  }
};

seedVehicles();
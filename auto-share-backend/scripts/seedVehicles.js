const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const Vehicle = require('../models/Vehicle');

// Debugging: Log the MONGO_URI to verify it's correctly loaded
console.log('MONGO_URI:', process.env.MONGO_URI);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

const vehicles = [
  {
    name: 'Car Model 1',
    category: 'SUV',
    price: 200,
    availability: true,
    imageUrl: '/images/car1.png',
  },
  {
    name: 'Car Model 2',
    category: "Sedan",
    price: 180,
    availability: false,
    imageUrl: '/images/car3.png'
  },
  {
    name: 'Car Model 3',
    category: 'Hatchback',
    price: 170,
    availability: true,
    imageUrl: '/images/car5.png'
  },
  {
    name: 'Car Model 4',
    category: 'Convertible',
    price: 250,
    availability: true,
    imageUrl: '/images/car6.png'
  },
  {
    name: 'Car Model 5',
    category: 'Coupe',
    price: 280,
    availability: false,
    imageUrl: '/images/car7.png'
  },
  {
    name: 'Car Model 6',
    category: 'SUV',
    price: 220,
    availability: true,
    imageUrl: '/images/car2.jfif',
  },
  {
    name: 'Car Model 7',
    category: 'Sedan',
    price: 120,
    availability: false,
    imageUrl: '/images/car4.jfif'
  },
  {
    name: 'Car Model 9',
    category: 'Hatchback',
    price: 150,
    availability: true,
    imageUrl: '/images/car8.jfif'
  },
  {
    name: 'Car Model 8',
    category: 'Convertible',
    price: 225,
    availability: true,
    imageUrl: '/images/img9.jpeg'
  },
  {
    name: 'Car Model 10',
    category: 'Coupe',
    price: 190,
    availability: false,
    imageUrl: '/images/img10.jpeg'
  },
  {
    name: 'Car Model 11',
    category: 'SUV',
    price: 201,
    availability: true,
    imageUrl: '/images/img11.jpeg',
  },
  {
    name: 'Car Model 12',
    category: 'Sedan',
    price: 130,
    availability: false,
    imageUrl: '/images/img12.jpeg'
  },
  {
    name: 'Car Model 13',
    category: 'Hatchback',
    price: 120,
    availability: true,
    imageUrl: '/images/img13.jpeg'
  },
  {
    name: 'Car Model 14',
    category: 'Convertible',
    price: 225,
    availability: true,
    imageUrl: '/images/img14.jpeg'
  },
  {
    name: 'Car Model 15',
    category: 'Coupe',
    price: 100,
    availability: false,
    imageUrl: '/images/img15.jpeg'
  }
];

const seedVehicles = async () => {
  try {
    // Clear existing data
    await Vehicle.deleteMany({});
    
    // Insert new data
    await Vehicle.insertMany(vehicles);
    
    console.log('Vehicles inserted successfully!');
  } catch (error) {
    console.error('Error inserting vehicles:', error.message);
  } finally {
    mongoose.connection.close();
  }
};

mongoose.connection.once('open', seedVehicles);
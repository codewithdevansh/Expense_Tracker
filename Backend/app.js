// Load environment variables from .env
require('dotenv').config();

// Import Mongoose
const mongoose = require('mongoose');

// Function to connect to the database
const connectDB = async () => {
    try {
        const uri = "mongodb+srv://sahudevansh02:am4ysjsZrl1FHigz@cluster0.jbh3n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Load MONGO_URI from .env
        if (!uri) {
            throw new Error('MONGO_URI is not defined in the .env file');
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

// Connect to the database
connectDB();

// Start a basic Express server (optional)
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is running and database is connected!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const {readdirSync} = require('fs');

// Routes
readdirSync('./routes').map((r) => app.use('/api', require(`./routes/${r}`)));
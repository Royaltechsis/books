const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bookController = require('./controllers/bookController'); 

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');    
});

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Atlas connection failed:', err));

// Define the /books route
app.post('/books', bookController.createBook);
app.get('/books/:id', bookController.getBookById);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
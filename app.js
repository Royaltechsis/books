const express = require('express');
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');    
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

// In app.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/book-api')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Connection failed:', err));

  // In app.js
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
  });
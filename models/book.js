const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  rentPerDay: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true  
});

module.exports = mongoose.model('Book', bookSchema);

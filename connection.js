const mongoose = require('mongoose');
const User = require('./models/user');
const Book = require('./models/book');

// Function to clear the database
const clearDatabase = async () => {
  try {
    await User.deleteMany({});
    await Book.deleteMany({});
    console.log("Database cleared.");
  } catch (err) {
    console.error("Error clearing database:", err);
  }
};

// Function to add users
const addUsers = async () => {
  const users = [
    { name: "Rahul Sharma", email: "rahul.sharma@example.com", userId: "U001", phone: "1234567890" },
    { name: "Priya Verma", email: "priya.verma@example.com", userId: "U002", phone: "0987654321" },
    { name: "Aman Singh", email: "aman.singh@example.com", userId: "U003", phone: "1112223333" },
    { name: "Sunita Rao", email: "sunita.rao@example.com", userId: "U004", phone: "4445556666" },
    { name: "Vikram Malhotra", email: "vikram.malhotra@example.com", userId: "U005", phone: "7778889999" }
  ];

  for (const user of users) {
    const existingUser = await User.findOne({ userId: user.userId });
    if (!existingUser) {
      await User.create(user);
      console.log(`Added user: ${user.name}`);
    } else {
      console.log(`User ${user.name} already exists`);
    }
  }
};

// Function to add books
const addBooks = async () => {
  const books = [
    { bookName: "JavaScript: The Good Parts", category: "Programming", rentPerDay: 5 },
    { bookName: "Clean Code", category: "Programming", rentPerDay: 8 },
    { bookName: "The Pragmatic Programmer", category: "Programming", rentPerDay: 7 },
    { bookName: "Harry Potter and the Sorcerer's Stone", category: "Fantasy", rentPerDay: 4 },
    { bookName: "The Lord of the Rings", category: "Fantasy", rentPerDay: 6 },
    { bookName: "1984", category: "Fiction", rentPerDay: 3 },
    { bookName: "Brave New World", category: "Fiction", rentPerDay: 4 },
    { bookName: "The Great Gatsby", category: "Fiction", rentPerDay: 2 },
    { bookName: "To Kill a Mockingbird", category: "Fiction", rentPerDay: 3 },
    { bookName: "The Art of War", category: "History", rentPerDay: 2 },
    { bookName: "The Prince", category: "History", rentPerDay: 3 },
    { bookName: "Sapiens: A Brief History of Humankind", category: "History", rentPerDay: 6 },
    { bookName: "Educated", category: "Biography", rentPerDay: 5 },
    { bookName: "Steve Jobs", category: "Biography", rentPerDay: 7 },
    { bookName: "Elon Musk", category: "Biography", rentPerDay: 6 },
    { bookName: "Rich Dad Poor Dad", category: "Self-help", rentPerDay: 4 },
    { bookName: "Atomic Habits", category: "Self-help", rentPerDay: 5 },
    { bookName: "The Power of Habit", category: "Self-help", rentPerDay: 4 },
    { bookName: "Deep Work", category: "Self-help", rentPerDay: 5 },
    { bookName: "The Lean Startup", category: "Business", rentPerDay: 6 }
  ];

  for (const book of books) {
    const existingBook = await Book.findOne({ bookName: book.bookName });
    if (!existingBook) {
      await Book.create(book);
      console.log(`Added book: ${book.bookName}`);
    } else {
      console.log(`Book ${book.bookName} already exists`);
    }
  }
};

// Function to initialize the database
const initializeDatabase = async () => {
  await clearDatabase(); // Clear existing data
  await addUsers();      // Add users
  await addBooks();      // Add books
};

// Connect to MongoDB and initialize the database


module.exports = {
  
  initializeDatabase,


};

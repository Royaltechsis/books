// In controllers/bookController.js
exports.getAllBooks = async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };

  exports.getBookById = async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) return res.status(404).json({ message: 'Book not found' });
      res.json(book);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };

  exports.createBook = async (req, res) => {
    const { title, author } = req.body;
    try {
      const book = new Book({ title, author });
      await book.save();
      res.status(201).json(book);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  };
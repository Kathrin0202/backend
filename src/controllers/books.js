const Book = require("../modules/books");
const getBooks = (request, response) => {
  return Book.find({})
    .then((data) => {
      response.status(200).send(data);
    })
    .catch((e) => response.status(500).send(e.massage));
};

const getBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findById(book_id).then((book) => {
    response
      .status(201)
      .send(book)
      .catch((e) => response.status(500).send(e.massage));
  });
};
const createBook = (request, response) => {
  return Book.create({ ...request.body }).then((book) => {
    response
      .status(201)
      .send(book)
      .catch((e) => response.status(500).send(e.massage));
  });
};
const updateBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndUpdate(book_id, { ...request.body }).then((book) => {
    response
      .status(201)
      .send(book)
      .catch((e) => response.status(500).send(e.massage));
  });
};
const deleteBook = (request, response) => {
  const { book_id } = request.params;
  return Book.findByIdAndDelete(book_id).then((book) => {
    response
      .status(201)
      .send("success")
      .catch((e) => response.status(500).send(e.massage));
  });
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};

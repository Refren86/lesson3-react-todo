import React, { useState } from "react";

import BOOK_ITEMS from "./store/books.json";
import { Form, Books } from "./components";

const App = () => {
  const [books, setBooks] = useState(BOOK_ITEMS);

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const changeStatus = (id) => {
    const bookId = books.findIndex((book) => book.id === id);
    const bookToChange = books[bookId];

    const bookWithNewStatus = { ...bookToChange, isRead: !bookToChange.isRead };

    setBooks((prev) => [
      ...prev.slice(0, bookId),
      bookWithNewStatus,
      ...prev.slice(bookId + 1),
    ]);
  };

  return (
    <div className="wrapper">
      <Form books={books} setBooks={setBooks} />
      {/* <StaticBoard /> */}
      <Books
        books={books}
        deleteBook={deleteBook}
        changeStatus={changeStatus}
      />
    </div>
  );
};

export default App;

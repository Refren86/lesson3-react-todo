import React from "react";

import Book from "../Book/Book";
import styles from "./Books.module.css";

export const Books = ({ books, deleteBook, changeStatus }) => {
  return (
    <>
      {books.length ? (
        books.map((book, index) => (
          <Book
            key={book.id}
            book={book}
            index={index}
            deleteBook={deleteBook}
            changeStatus={changeStatus}
          />
        ))
      ) : (
        <h1 className={styles.booksNotFoundMessage}>
          No books, try adding one! 🤷‍♂️
        </h1>
      )}
      {}
    </>
  );
};

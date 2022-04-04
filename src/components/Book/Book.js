import React from "react";

import styles from "./Book.module.css";

const Book = ({ book, index, deleteBook, changeStatus }) => {
  const { id, name, description, isRead } = book;

  return (
    <div className={styles.bookBlock}>
      <h2 className={isRead ? styles.isRead : styles.bookName}>
        {index + 1}) {name}
      </h2>

      <div className={styles.descriptionBlock}>
        <p>{description}</p>

        <div className={styles.buttonsBlock}>
          <button onClick={() => changeStatus(id)} className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.checkBtn}
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.959 17l-4.5-4.319 1.395-1.435 3.08 2.937 7.021-7.183 1.422 1.409-8.418 8.591z" />
            </svg>
          </button>

          <button onClick={() => deleteBook(id)} className={styles.button}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.deleteBtn}
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;

import React from "react";

import { MyButton } from "../UI";
import styles from "./StaticBoard.module.css";

export const StaticBoard = ({ books, setBooks }) => {
  const read = books.filter((book) => book.isRead === true).length;
  const notRead = books.filter((book) => book.isRead === false).length;

  return (
    <div className={styles.staticBoardContainer}>
      <div className={styles.statisticWrapper}>
        <h4>All: {books.length}</h4>
        <h4 className={styles.read}>Read: {read}</h4>
        <h4 className={styles.notRead}>Not read: {notRead}</h4>
      </div>

      <div>
        <MyButton onClick={() => setBooks([])}>Remove all</MyButton>
      </div>
    </div>
  );
};

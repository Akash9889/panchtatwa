import React, { useEffect } from "react";
import BookCard from "./BookCard";
import "./books.css";
import { booksImages } from "../../assets/images/books/booksImages";

export default function Books() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="books-main-container">
      <div className="book-card-container">
        {booksImages?.length > 0 ? (
          React.Children.toArray(
            booksImages.map((book) => <BookCard book={book} />)
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

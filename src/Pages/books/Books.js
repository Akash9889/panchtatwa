import React, { useEffect } from "react";
import BookCard from "./BookCard";
import "./books.css";
import { booksImages } from "../../assets/images/books/booksImages";

export default function Books() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bookArray = Object.keys(booksImages);

  return (
    <div className="books-main-container">
      <div className="book-card-container">
        {bookArray?.length > 0 ? (
          React.Children.toArray(
            bookArray.map((book) => <BookCard book={booksImages[book]} />)
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

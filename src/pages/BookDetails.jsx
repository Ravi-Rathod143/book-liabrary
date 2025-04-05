import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles.css";

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) => state.books.find((b) => b.id === id)); // id is string, match directly

  if (!book) {
    return <h2 className="not-found">❌ Book Not Found</h2>;
  }

  return (
    <div className="book-details">
      <div className="book-card">
        <h1 className="book-title">{book.title}</h1>
        <h3 className="book-author">by {book.author}</h3>
        <p className="book-description">{book.description}</p>
        <p className="book-rating">⭐ Rating: {book.rating} / 5</p>
        <Link to="/books" className="back-btn">⬅ Back to Browse</Link>
      </div>
    </div>
  );
}

export default BookDetails;

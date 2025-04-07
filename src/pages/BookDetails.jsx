import React from "react";
import { useParams, Link } from "react-router-dom"; // useParams to get route param, Link for navigation
import { useSelector } from "react-redux"; // useSelector to access Redux state
import "../styles.css"; // Importing CSS styles

// Component to show detailed info of a selected book
function BookDetails() {
  const { id } = useParams(); // Extracting 'id' from URL params

  // Finding the book from Redux store whose id matches the param id
  const book = useSelector((state) => state.books.find((b) => b.id === id)); // id is string, match directly

  // If book not found, display error message
  if (!book) {
    return <h2 className="not-found">❌ Book Not Found</h2>;
  }

  // If book is found, display its details
  return (
    <div className="book-details">
      <div className="book-card">
        <h1 className="book-title">{book.title}</h1> {/* Book title */}
        <h3 className="book-author">by {book.author}</h3> {/* Book author */}
        <p className="book-description">{book.description}</p> {/* Description */}
        <p className="book-rating">⭐ Rating: {book.rating} / 5</p> {/* Rating */}
        <Link to="/books" className="back-btn">⬅ Back to Browse</Link> {/* Navigation link to go back */}
      </div>
    </div>
  );
}

export default BookDetails;

import React from "react";
import { Link } from "react-router-dom"; // Used to navigate to other routes
import "../styles.css"; // Import CSS file for styling

// List of book categories
const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];

// List of some popular books to show on homepage
const popularBooks = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
];

// Home component for landing page
function Home() {
  return (
    <div className="home-container">
      {/* Title of the page */}
      <h1 className="home-title">📚 Online Library</h1>

      {/* Section: Categories */}
      <h2 className="section-title"> Categories</h2>

      {/* Render all categories as clickable boxes that navigate to book list */}
      <div className="category-container">
        {categories.map((category, index) => (
          <Link
            key={index} // Unique key for each category
            to={`/books/${category.toLowerCase()}`} // Link to category-specific book list
            className="category-box"
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Section: Popular Books */}
      <h2 className="section-title">Popular Books</h2>

      {/* Render a card for each popular book */}
      <div className="book-grid">
        {popularBooks.map((book) => (
          <div key={book.id} className="book-card">
            {/* Book title */}
            <h3 className="book-title">{book.title}</h3>

            {/* Book author */}
            <p className="book-author">by {book.author}</p>

            {/* Link to detailed view of the book */}
            <Link to={`/book/${book.id}`} className="details-btn">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

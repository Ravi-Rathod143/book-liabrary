import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Import CSS

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery"];

const popularBooks = [
  { id: 1, title: "Harry Potter", author: "J.K. Rowling" },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
];

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">📚 Online Library</h1>

      <h2 className="section-title"> Categories</h2>
      <div className="category-container">
        {categories.map((category, index) => (
          <Link key={index} to={`/books/${category.toLowerCase()}`} className="category-box">
            {category}
          </Link>
        ))}
      </div>

      <h2 className="section-title">Popular Books</h2>
      <div className="book-grid">
        {popularBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h3 className="book-title">{book.title}</h3>
            <p className="book-author">by {book.author}</p>
            <Link to={`/book/${book.id}`} className="details-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

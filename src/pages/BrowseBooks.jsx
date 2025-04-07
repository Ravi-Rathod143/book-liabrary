import React, { useState } from "react";
import { Link, useParams } from "react-router-dom"; // Link is used for navigation, useParams to get category from URL
import { useSelector } from "react-redux"; // Access Redux store
import "../styles.css"; // Import CSS

// Component to browse and search books
function BrowseBooks() {
  const { category } = useParams(); // Get category from URL parameters
  const books = useSelector((state) => state.books); // Get all books from Redux store
  const [search, setSearch] = useState(""); // Local state for search input

  // Filter books by selected category (if any) and search input
  const filteredBooks = books.filter(
    (book) =>
      (!category || book.category.toLowerCase() === category.toLowerCase()) && // Match category if exists
      (
        book.title.toLowerCase().includes(search.toLowerCase().trim()) || // Match title with search
        book.author.toLowerCase().includes(search.toLowerCase().trim())   // Match author with search
      )
  );

  return (
    <div className="browse-books">
      <h1 className="browse-title">📚 Browse Books</h1>

      {/* Search input box */}
      <input
        type="text"
        placeholder=" Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)} // Update search input state
        className="search-bar"
      />

      {/* Show message if no books match filter, else show filtered list */}
      {filteredBooks.length === 0 ? (
        <p className="no-books">❌ No books found...</p>
      ) : (
        <ul className="book-list">
          {filteredBooks.map((book) => (
            <li key={book.id} className="book-item">
              {/* Each book is a clickable link that opens detailed view */}
              <Link to={`/book/${book.id}`} className="book-link">
                {book.title} by {book.author}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BrowseBooks;

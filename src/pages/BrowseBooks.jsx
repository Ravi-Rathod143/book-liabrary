import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles.css"; // Import CSS

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  // Filter books by category and search query
  const filteredBooks = books.filter(
    (book) =>
      (!category || book.category.toLowerCase() === category.toLowerCase()) &&
      (book.title.toLowerCase().includes(search.toLowerCase().trim()) ||
        book.author.toLowerCase().includes(search.toLowerCase().trim()))
  );

  return (
    <div className="browse-books">
      <h1 className="browse-title">📚 Browse Books</h1>
      <input
        type="text"
        placeholder=" Search by title or author..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {filteredBooks.length === 0 ? (
        <p className="no-books">❌ No books found...</p>
      ) : (
        <ul className="book-list">
          {filteredBooks.map((book) => (
            <li key={book.id} className="book-item">
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

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

// AddBook component allows the user to add a new book to the store
function AddBook() {
  // State variables for form fields
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch(); // Hook to dispatch Redux actions
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validation checks
    if (!title || !author || !description || !rating || !category) {
      alert("All fields are required!");
      return;
    }

    if (title.length < 3) {
      alert("Title should be at least 3 characters long.");
      return;
    }

    if (!/^[a-zA-Z\s]+$/.test(author)) {
      alert("Author name should contain only alphabets and spaces.");
      return;
    }

    if (description.length < 10) {
      alert("Description should be at least 10 characters long.");
      return;
    }

    if (rating < 1 || rating > 5) {
      alert("Rating must be between 1 and 5.");
      return;
    }

    const validCategories = ["fiction", "non-fiction", "sci-fi", "mystery"];
    if (!validCategories.includes(category.toLowerCase())) {
      alert("Invalid category! Please choose from the list.");
      return;
    }

    // Dispatch addBook action to Redux store
    dispatch(
      addBook({
        title,
        author,
        description,
        rating,
        category: category.toLowerCase(),
      })
    );

    // Navigate to /books page after adding book
    navigate("/books");
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <form onSubmit={handleSubmit} className="form">
        {/* Input for Book Title */}
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
          required
        />

        {/* Input for Author Name */}
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input-field"
          required
        />

        {/* Input for Description */}
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input-field"
          required
        />

        {/* Input for Rating */}
        <input
          type="number"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="input-field"
          required
        />

        {/* Dropdown for Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-field"
          required
        >
          <option value="">-- Select Category --</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="mystery">Mystery</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="btn">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;

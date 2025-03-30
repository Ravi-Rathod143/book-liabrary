import React from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Add CSS for styling

function NotFound() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404 - Page Not Found 😢</h1>
      <p className="notfound-text">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="notfound-btn">🏠 Go Back Home</Link>
    </div>
  );
}

export default NotFound;

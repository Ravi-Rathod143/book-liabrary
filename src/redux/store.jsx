import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";   // import the reducer


// Create the Redux store and include the books reducer
const store = configureStore({
  reducer: {
    books: booksReducer, // key = slice name
  },
});

export default store;

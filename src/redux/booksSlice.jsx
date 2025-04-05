import { createSlice, nanoid } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: [
    { id: "1", title: "Harry Potter", author: "J.K. Rowling", category: "fiction", description: "A magical story.", rating: 5 },
    { id: "2", title: "The Hobbit", author: "J.R.R. Tolkien", category: "fiction", description: "An epic fantasy adventure.", rating: 4.5 },
    { id: "3", title: "Atomic Habits", author: "James Clear", category: "non-fiction", description: "A book on habit building.", rating: 4.7 },
    { id: "4", title: "To Kill a Mockingbird", author: "Harper Lee", category: "fiction", description: "A novel about racial injustice and childhood in the Deep South.", rating: 4.7 },
    { id: "5", title: "The Alchemist", author: "Paulo Coelho", category: "fiction", description: "A journey of self-discovery and following one's dreams.", rating: 4.6 },
  ],
  reducers: {
    addBook: (state, action) => {
      state.push({ id: nanoid(), ...action.payload });
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
  },
});

export const { addBook, removeBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;

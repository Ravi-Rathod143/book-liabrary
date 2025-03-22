import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: [
    { id: 1, title: "Harry Potter", author: "J.K. Rowling", category: "Fiction", description: "A magical story.", rating: 5 },
    { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fiction", description: "An epic fantasy adventure.", rating: 4.5 },
    { id: 3, title: "Atomic Habits", author: "James Clear", category: "Non-Fiction", description: "A book on habit building.", rating: 4.7 },    
      { 
        id: 4, 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        category: "Classic", 
        description: "A novel about racial injustice and childhood in the Deep South.", 
        rating: 4.7 
      },
      
      { 
        id: 5, 
        title: "The Alchemist", 
        author: "Paulo Coelho", 
        category: "Philosophy", 
        description: "A journey of self-discovery and following one's dreams.", 
        rating: 4.6 
      },
      
],
  reducers: {
    addBook: (state, action) => {
      state.push({ id: state.length + 1, ...action.payload });
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;

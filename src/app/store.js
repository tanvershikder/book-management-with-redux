import booksReducers from "../Feactures/books/BookSlice";
const configureStore = require('@reduxjs/toolkit').configureStore

const store = configureStore({
    reducer : {
        booksReducer : booksReducers
    }
});

export default store
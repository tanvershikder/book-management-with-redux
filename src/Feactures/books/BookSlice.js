import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

const initialBooks = {
    books : [
        {id : uuidv4() , title : "Data structure And Algorithm" , author : "kink-kong"},
        {id : uuidv4() , title : "problem solving with smit" , author : "denial-smit"},
    ]
}

export const bookSlice = createSlice({
    name: "books",
    initialState : initialBooks,
    reducers :{
        showBooks : (state) => state,
        addBooks : (state,actions) =>{
            state.books.push(actions.payload)
        },
        updateBooks : (state,actions) =>{

            const {id,title,author} = actions.payload
            const isBookExits = state.books.filter((book)=> book.id === id)

            if(isBookExits){
                console.log(isBookExits);
                isBookExits[0].title = title;
                isBookExits[0].author = author
            }

        },
        delteBooks : (state,actions) =>{
            const id = actions.payload;
            state.books = state.books.filter((book)=>book.id !== id)
        }
    }
})

export const {showBooks,addBooks,delteBooks,updateBooks} = bookSlice.actions;

export default bookSlice.reducer;
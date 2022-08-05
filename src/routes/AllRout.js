import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddBooks from '../Feactures/books/AddBooks';
import EditBooks from '../Feactures/books/EditBooks';
import Showbooks from '../Feactures/books/Showbooks';
import Home from '../pages/Home/Home';
import NotFound from '../pages/NotFound';

const AllRout = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/showbook' element={<Showbooks/>}></Route>
            <Route path='/addbook' element={<AddBooks/>}></Route>
            <Route path='/editbook' element={<EditBooks/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    );
};

export default AllRout;
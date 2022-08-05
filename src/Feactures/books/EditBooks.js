import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import { updateBooks } from './BookSlice';

const EditBooks = () => {
    const dispatch = useDispatch()

    const location = useLocation()
    const navigate = useNavigate()

    const [id, setId] = useState(location.state.id)
    const [title, setTitle] = useState(location.state.title)
    const [author, setAuthor] = useState(location.state.author)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateBooks({ id, title, author }))
        navigate('/showbook')
    }

    return (
        <div className='text-center my-5'>
            <h3 className="text-2xl font-bold my-4">Edit Book</h3>

            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="" className='font-bold mr-3'>Title:  </label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} className="border-solid border-2 border-indigo-600 rounded" required />
                </div>
                <div className='mb-3'>
                    <label htmlFor="" className='font-bold mr-3'>Auhtor:  </label>
                    <input onChange={(e) => setAuthor(e.target.value)} value={author} className="border-solid border-2 border-indigo-600 rounded" required />
                </div>
                <input type="submit" value="Update book" className='btn bg-primary my-3 w-[100px] h-[25px]' />
            </form>
        </div>
    );
};

export default EditBooks;
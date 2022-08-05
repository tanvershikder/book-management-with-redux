import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useNavigate } from 'react-router-dom';
import { addBooks } from './BookSlice';
import { v4 as uuidv4 } from 'uuid';

const AddBooks = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const navigate = useNavigate()

    const numberOfBooks = useSelector((state)=> state.booksReducer.books.length)

    const dispatch = useDispatch()

    const onSubmit = data => {
        const title = data.title
        const author = data.author
        const book ={id: uuidv4(), title , author}
        dispatch(addBooks(book))
        navigate("/showbook")
    }

    return (
        <div className='text-center my-5'>
            <h3 className="text-2xl font-bold my-4">Add Book</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-3'>
                    <label htmlFor="" className='font-bold mr-3'>Title:  </label>
                    <input {...register("title", { required: true })} className="border-solid border-2 border-indigo-600 rounded" />
                    {errors.title && <span className='text-red-500'>Title is required</span>}
                </div>
                
                <div>
                    <label htmlFor="" className='font-bold mr-3'>Author:  </label>
                    <input {...register("author", { required: true })} className="border-solid border-2 border-indigo-600 rounded" />
                    {errors.author && <span className='text-red-500'>Author is required</span>}
                </div>

                <input type="submit" value="Add book" className='btn bg-primary my-3 w-[100px] h-[25px]' />
            </form>
        </div>
    );
};

export default AddBooks;
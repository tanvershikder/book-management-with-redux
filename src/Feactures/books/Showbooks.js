import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';
import { delteBooks } from './BookSlice';

const Showbooks = () => {

    const books = useSelector((state) => state.booksReducer.books)
    // console.log(books);

    const dispatch = useDispatch()

    const hendelDelete = (id) => {
        const procide = window.confirm("are you sure ? you want to delete ?")
        if (procide) {
            dispatch(delteBooks(id))
        }
    }

    return (
        <div>
            <h2 className='text-2xl text-center m-5'>List of All Books</h2>
            <div className='flex justify-center items-center'>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {/* <!-- row 1 --> */}
                            {
                                books.map(book => {
                                    const {id,title,author} = book
                                    
                                    return (
                                        <tr key={id}>
                                    <td>{book.title}</td>
                                    <td>{book.author}</td>
                                    <td>
                                        <Link to={"/editbook"} state={{id,title,author}}>
                                            <button>Edit</button>
                                        </Link>
                                    </td>
                                    <td><button onClick={() => { hendelDelete(book.id) }}>Delete</button></td>

                                </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Showbooks;
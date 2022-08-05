import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-[url('https://leverageedu.com/blog/wp-content/uploads/2019/09/Importance-of-Books.jpg')]">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Welcome to Books Management</h1>
                        <p class="mb-5">This is simple practice website which is made with react , react-redux , redux toolkit and Tailwind css and React Form Hooks</p>
                        <Link to={'/showbook'}><button class="btn btn-accent">show all books</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './Shop.css';

const Shop = () => {
    const [movies, setMovies]=useState([]);
    useEffect(()=>{
        fetch('movies.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[]);
    return (
        <div className='shop'>
            <div className="movie-container">
                {
                    movies.map(movie=><Movie movie={movie} key={movie.id}></Movie>)
                }
            </div>
            <div className="cart-container">

            </div>
        </div>
    );
};

export default Shop;
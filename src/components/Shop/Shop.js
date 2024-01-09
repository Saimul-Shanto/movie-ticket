import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';
import './Shop.css';
import Cart from '../Cart/Cart';


const Shop = () => {
    const [movies, setMovies]=useState([]);
    const [ticket,setTicket]=useState([]);
    useEffect(()=>{
        fetch('movies.json')
        .then(res=>res.json())
        .then(data=>setMovies(data))
    },[]);
    let newTicket=[];
    const buyTicketHandler=(movie)=>{
        // console.log('click');
        newTicket=[...ticket,movie];
         setTicket(newTicket);
    }
    return (
        <div className='shop'>
            <div className="movie-container">
                {
                    movies.map(movie=><Movie movie={movie} key={movie.id} buyTicketHandler={buyTicketHandler}></Movie>)
                }
            </div>
            <div className="cart-container">
                <Cart ticket={ticket}></Cart>
            </div>
        </div>
    );
};

export default Shop;
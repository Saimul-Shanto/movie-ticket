import React from 'react';
import './Movie.css';

const Movie = (props) => {
    const {movieName,moviePoster,ticketPrice}=props.movie;
    console.log(props.movie);
    return (
        <div className='movie'>
            <img src={moviePoster} alt="loading problem" />
            <div className='movie-info'>
                <p>{movieName}</p>
                <p>Price: {ticketPrice}</p>
            </div>
            
        </div>
    );
};

export default Movie;
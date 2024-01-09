import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicket } from '@fortawesome/free-solid-svg-icons'
import './Movie.css';


const Movie = (props) => {
    const {movieName,moviePoster,ticketPrice}=props.movie;
    // const {buyTicketHandler}=props.buyTicketHandler;
    // console.log(props.movie);
    return (
        <div className='movie'>
            <img src={moviePoster} alt="loading problem" />
            <div className='movie-info'>
                <p>{movieName}</p>
                <p>Price: {ticketPrice}</p>
            </div>
            <button className='add-btn' onClick={()=>props.buyTicketHandler(props.movie)}>
                <p className='btn-text'>Buy Ticket</p> 
                <FontAwesomeIcon icon={faTicket} /></button>
        </div>
    );
};

export default Movie;
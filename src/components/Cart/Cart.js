import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const {ticket}=props;
    const [randoms,setRandoms]=useState([]);

    const deleteBtn=(id)=>{
        console.log('delete');
    }

    if(ticket.length>4)
    {
        alert("Buy ticket less than 5!!");
    }
    let randomMovie={};
    const randomSelect=(ticket)=>{
        randomMovie=(ticket[(Math.floor(Math.random() * ticket.length))]);
        setRandoms(randomMovie);
    }
    const chooseAgain=(ticket)=>{
        ticket=[];
        console.log(ticket.length); 
    }
    return (
        <div className='cart'>
            <h3>Ticket Summary</h3>
            <p>{ticket.length}</p>
            {/* <p>{mName}</p> */}
            
            {
               ticket.map(mov=> <div className='show-item' key={mov.id}>
                <img src={mov.moviePoster} alt='loading problem'></img>
                <p>{mov.movieName}</p>
                <div onClick={()=>deleteBtn(mov.id)}><FontAwesomeIcon icon={faTrash} /></div>
                </div>)
            }
            
            <button className='random' onClick={()=>randomSelect(ticket)}>Show 1 for me</button>
            <div className='show-item'>
                <img src={randoms.moviePoster} alt=''></img>
                <p>{randoms.movieName}</p>
            </div>
            <button onClick={()=>chooseAgain(ticket)} className='random'>Choose Again</button>
        </div>
    );
};

export default Cart;
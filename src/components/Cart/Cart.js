import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';

const Cart = (props) => {
    const {ticket}=props;
    // console.log(ticket);
    const deleteBtn=()=>{
        console.log('delete');
    }
    return (
        <div className='cart'>
            <h3>Ticket Summary</h3>
            <p>{ticket.length}</p>
            {/* <p>{mName}</p> */}
            
            {
               ticket.map(mov=><div className='show-item'>
                <img src={mov.moviePoster} alt='loading problem'></img>
                <p>{mov.movieName}</p>
                <div onClick={deleteBtn}><FontAwesomeIcon icon={faTrash} /></div>
                </div>)
            }
        </div>
    );
};

export default Cart;
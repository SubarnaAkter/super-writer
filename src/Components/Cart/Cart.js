import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
   
    console.log(cart)
  const totalReducer=(previous,current)=>previous+current.income;
  const total=cart.reduce(totalReducer,0);
    return (
        <div>
            <h4><FontAwesomeIcon icon={faUser} /> Writers added: {cart.length}</h4>
            <h5 className="pt-5">Total Income : ${total}</h5>

            <hr className="mt-5"/>
        
           <div>
           Writers :
           <ul>
              {
                  cart.map(item=> <li>{item.name}</li>)
              }
            </ul>
           </div>
        </div>
    );
};

export default Cart;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTimes, faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
   
  const totalReducer=(previous,current)=>previous+current.price;
  const total=cart.reduce(totalReducer,0);
    return (
        <div>
            <h4><FontAwesomeIcon icon={faUser} /> Writers added: {cart.length}</h4>
            <h5 className="pt-5">Total Amount : ${total}</h5>

            <hr className="mt-5"/>
        
           <div>
           Writers :
           <div>
              {
                  cart.map((item,id)=>
                 
                    <div className='selected' key={id}>
                     
                      <img src={item.img} alt="" />
                      <h6 className="p-2">{item.name}</h6> 
                      <button className="cancel-btn btn m-1"><FontAwesomeIcon  icon={faTimes} /></button>
                     </div>)
              }
            </div>
           </div>
        </div>
    );
};

export default Cart;
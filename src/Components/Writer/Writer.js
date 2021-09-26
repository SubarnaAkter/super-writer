import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {book, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Writer.css';

const Writer = (props) => {
    
    const {name,img,age,price,book, notableAwards, education}=props.writer;
  
    return (
        
        <div >
            <div className="col">
                <div className="card card-style writer py-4  ">
                    <img src={img} className="card-img-top mx-auto" alt=""/>
                <div className="card-body">
                    <h3 className="card-title writer-name">{name}</h3>
                    <h6 className="card-text ">Age: {age}</h6>
                   
                 
                    <h6 className="card-text">Education: {education}</h6>
                    <h6 className="card-text">Notable Awards: {notableAwards}</h6>
                    <h6 className="card-text">Book: {book}</h6>
                    <h6 className="card-text">Price: ${price}</h6>
                    <button className="btn add-btn my-3 " onClick={()=>{
                        props.handleCart(props.writer)
                    }}><FontAwesomeIcon icon={faShoppingCart} /> Add to List</button>


                </div>
              </div>
            </div>
       </div>
  
    );
};

export default Writer;
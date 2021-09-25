import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Writer.css';

const Writer = (props) => {
    
    const {name,img,age,income, notableAwards, education}=props.writer;
  
    return (
        
        <div >
            <div className="col">
                <div className="card card-height writer text-center py-4 shadow ">
                    <img src={img} className="card-img-top mx-auto" alt=""/>
                <div className="card-body">
                    <h3 className="card-title writer-name">{name}</h3>
                    <p className="card-text">Age:{age}</p>
                   
                    <p className="card-text">Income:{income}</p>
                    <p className="card-text">Education:{education}</p>
                    <p className="card-text">Notable Awards:{notableAwards}</p>

                    <button className="btn add-btn" onClick={()=>{
                        props.handleCart(props.writer)
                    }}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>

             
                </div>
              </div>
            </div>
       </div>
  
    );
};

export default Writer;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Writer.css';

const Writer = (props) => {
    
    const {name,img,age,income, notableAwards, education}=props.writer;
  
    return (
        
        <div >
            <div className="col">
                <div className="card card-style writer text-center py-4 shadow ">
                    <img src={img} className="card-img-top mx-auto" alt=""/>
                <div className="card-body">
                    <h3 className="card-title writer-name">{name}</h3>
                    <h6 className="card-text ">Age:{age}</h6>
                   
                    <h6 className="card-text">Income:{income}</h6>
                    <h6 className="card-text">Education:{education}</h6>
                    <h6 className="card-text">Notable Awards:{notableAwards}</h6>

                    <button className="btn add-btn m-3" onClick={()=>{
                        props.handleCart(props.writer)
                    }}><FontAwesomeIcon icon={faShoppingCart} /> Add to List</button>


                </div>
              </div>
            </div>
       </div>
  
    );
};

export default Writer;
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writer from '../Writer/Writer';
import './Writers.css';
const Writers = () => {
    const [writers,setWriters]=useState([]);
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        fetch('./fakedb.JSON')
        .then(res=>res.json())
        .then(data=>setWriters(data))
    },[])
     
    const handleCart=(writer)=>{
        const newCart=[...cart,writer];
         setCart(newCart);
    }
    return (
     <div className="writers  my-5 ">
        <div className="row row-cols-1 row-cols-md-3 g-4 container ">
          {
              writers.map(writer=><Writer
                 key={writer.id}
                 writer={writer}
                 handleCart={handleCart}></Writer>)
          }
        </div>
        <div className='cart h-25 p-5 ps-5 shadow-lg'>
               
               <h2>List</h2>
               <hr />
               {
                  <Cart cart={cart} ></Cart>
               }
        </div>
    </div>
       
    );
};

export default Writers;
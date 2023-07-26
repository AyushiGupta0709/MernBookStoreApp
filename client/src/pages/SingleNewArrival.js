import React from 'react';
import "../styles/NewArrivals.css";
const SingleNewArrival = (props) => {
  return (
    <>
        <div className='single-new-arrival'>
            <div className='single-image-container'>
                <img src={props.src} alt={props.name} />
            </div>
            <div className='book-desrciption'>
                <h5>{props.name.toUpperCase()}</h5>
                <p>Author: <span>{props.author}</span></p>
                <p className='price'>Price:<span>Rs {props.price}</span></p>
            </div>
        </div>
    </>
  )
}

export default SingleNewArrival
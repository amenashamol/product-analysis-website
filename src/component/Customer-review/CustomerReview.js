import React from 'react';
import './CustomerReview.css';

const CustomerReview = ({product}) => {
    
    const { name, img, seller, price, ratings } = product;
    
    return (
        <div className='product'>
            <img src={img} alt=""></img>
            <div className='product-info'>
                <p className='product-name'>Name:{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Ratings: {ratings} stars</small></p>
            </div>
            
        </div>
    );
};

export default CustomerReview;
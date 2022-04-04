import React from 'react';

import useProducts from '../../hooks/useProducts';

import Product from '../Product/Product';
import './Reviews.css'

const Review = () => {
    const [products, setProducts] = useProducts([]);
    

    return (
        <div className='review-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        
                        ></Product>)
                }
            </div>
            
        </div>
    );
};

export default Review;
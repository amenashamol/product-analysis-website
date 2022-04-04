import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Product from '../Product/Product';
import logo from '../../images/Baag.png';
import './Home.css'
import CustomerReview from '../Customer-review/CustomerReview';

const Home = () => {
    const [products, setProducts] = useProducts([]);
    const [item, setItem] = useState([]);

    return (
        <div>
            <div className='home'>
                <div className='purchage'>
                <h1>Your Purchase</h1> 
                <h2>Changes Lives</h2>
                <p>
                    Women-BagSite.com is a social business enterprise that supports the empowerment  of women.     For every product you purchase, 100% of the profits go to support education and training for those living in extreme poverty. Enjoy your new bag and change a life today
                    </p>
                </div>
                <div className='pic' >
                <img src={logo} alt=""></img>
                </div>
            </div>
                <div className='Customer-Reviews'>
                    <h1>Customer Reviews(3)</h1>
                    <div className='review-container'>
                        <div className="products-container">
                        {
                         products.length>3 && products.slice(0,3).map(product=><CustomerReview 
                            key={product.id}
                                product={product}
                            
                                ></CustomerReview >)
                        }
                        
                    </div>
                </div>

            </div> 

            <Link to='/reviews'>
            <button>See All Reviews</button>
            </Link> 
         
        </div>
    );
};

export default Home;
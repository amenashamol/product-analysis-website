import React from 'react';
import logo from '../../images/Baag.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div>
              home  
            </div>
            <div className='pic'>
            <img src={logo} alt=""></img>
            </div>
        </div>
    );
};

export default Home;
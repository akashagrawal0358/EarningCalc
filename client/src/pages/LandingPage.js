import React from 'react';
import '../styles/landing.css';
import { NavLink } from 'react-router-dom';
import { AiFillPlayCircle } from 'react-icons/ai'
import Navbar from '../components/Navbar';

const LandingPage = () => {
    return (
        <>  
            <Navbar/>
            <div className='bigContainer'>

                <div className='container'>


                    <div className="landing-box">
                        <div className='content'>

                            <p className='p1'>Discover Your Earning</p>
                            <p className='p1'>  potential</p>
                            <p className='p2'>Turn your YouTube expertise into a lucrative income </p>
                            <p className='p2'>through resource sharing</p>


                        </div>
                        <div className="search-container">

                            <input type="text" className="search-box" placeholder=" enter youtube video link" />
                            <NavLink to="/earningpage" className="check-button">Check Earning</NavLink>

                        </div>
                    </div>
                </div>
                <span className='mediaPlayer'> <AiFillPlayCircle />  </span>
            </div>
        </>
    );
};

export default LandingPage;

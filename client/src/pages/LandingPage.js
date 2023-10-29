import React, { useEffect, useState } from 'react';
import '../styles/landing.css';
import { NavLink } from 'react-router-dom';
import { AiFillPlayCircle } from 'react-icons/ai'
import Navbar from '../components/Navbar';
//import axios from 'axios';
//import('dotenv').config();


const LandingPage = () => {


    const [videoLink, setvideoLink] = useState('');
   
    const KEY = 'AIzaSyAJxuDk1X94gl3vBa1_iAgQJx1MciD2gV0';
    const VIDEO_ID = 'BdTIjqL6Fe8';


    const API_URL = `https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&part=statistics&key=${KEY}`;



let views ,comments , likes ;
    fetch(API_URL)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                views = data["items"][0].statistics.viewCount;
                comments = data["items"][0].statistics.commentCount;
                likes = data["items"][0].statistics.likeCount;
                console.log(views, comments, likes);
            })


    return (
        <>
            <Navbar />
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

                            <input type="text" className="search-box" placeholder=" enter youtube video link" onChange={(e) => setvideoLink(e.target.value)} />
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

import React, { useEffect, useState } from 'react';
import '../styles/landing.css';
import { NavLink } from 'react-router-dom';
import { AiFillPlayCircle } from 'react-icons/ai'
import Navbar from '../components/Navbar';
import { useData } from '../context/DataContext';


const LandingPage = () => {


    const [videoLink, setvideoLink] = useState('');

    const { updateData } = useData();

    const KEY = 'AIzaSyAJxuDk1X94gl3vBa1_iAgQJx1MciD2gV0';
    const VIDEO_ID = 'BdTIjqL6Fe8';



    // let views, comments, likes;
  //  const [youtubeData, setYoutubeData] = useState({ views: 0, likes: 0, comments: 0 });

    const API_URL = `https://www.googleapis.com/youtube/v3/videos?id=${VIDEO_ID}&part=statistics&key=${KEY}`;

   
    useEffect(() => {
        fetch(API_URL)
            .then(response => {
                return response.json()
            })
            .then(data => {
               // console.log('Fetched data:', data);

                const views = data["items"][0].statistics.viewCount;
                const comments = data["items"][0].statistics.commentCount;
                const likes = data["items"][0].statistics.likeCount;

               // console.log('Views:', views, 'Comments:', comments, 'Likes:', likes);

                // setYoutubeData({ views, likes, comments });

                 // Used to update the context data
                 updateData({ views, likes, comments });
                 

                // Storing fetched data in local Storage, so that on reloading window data not get lost  
                 sessionStorage.setItem('youtubeData', JSON.stringify({ views, likes, comments })); 
                
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });

    }, []);

 

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

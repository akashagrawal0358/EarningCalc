import React from 'react'
import { useData } from '../context/DataContext'

const EarningTwo = () => {

    const{  updateYoutubeData } = useData();


  return (

    <>

      {/* <div className='head'>  <span className='Earnheading'> Other Videos Potentials </span></div> */}
      <div className='container'>
        <div className='container-EarnTwo'>
          <div className='row-header'>
            <div className="column-Table">Rank</div>
            <div className="column-Table">Title</div>
            <div className="column-Table">Thumbnail</div>
            <div className="column-Table">Views</div>
            <div className="column-Table">Likes</div>
            <div className="column-Table">Comments</div>
            <div className="column-Table">Uploaded On</div>
            <div className="column-Table">Earning</div>
          </div>

          <div className='row-header row-all'>
            <div className="column-Table">2</div>
            <div className="column-Table">Video Title Name</div>
            <div className="column-Table"><img className='row-img' src='../Images/rowimg.jpg' alt='no' /></div>
            <div className="column-Table">{updateYoutubeData.views}</div>
            <div className="column-Table">{updateYoutubeData.likes}</div>
            <div className="column-Table">{updateYoutubeData.comments}</div>
            <div className="column-Table">56564</div>
            <div className="column-Table">53657764</div>
          </div>



        </div>
      </div>
    </>
  )
}

export default EarningTwo
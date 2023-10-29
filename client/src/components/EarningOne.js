import React, { useEffect } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { RiThumbUpFill } from 'react-icons/ri'
import { FaCommentAlt } from 'react-icons/fa'
import { FaIndianRupeeSign } from 'react-icons/fa6'
import { RiAwardFill } from 'react-icons/ri'

import { useData } from '../context/DataContext'



const EarningOne = () => {
    const { updateYoutubeData , updateData} = useData();

    useEffect(() => {
        console.log('Updatedd Data:', updateYoutubeData);
    }, [updateYoutubeData]);


    return (

        <div className='container'>

            <div className='container-EarnOne'>

                <div className="e-row">
                    <div className='e-row-inside'>
                        <div className="Maincolumn1">
                            <div className='column1'>

                                <span className='topEarning'><RiAwardFill /> Top Earning videos</span>
                                <figure>
                                    <img className='earn-img' src="../images/earningimg.jpg" alt='k' />
                                </figure>
                                <span className='upload'> Uploaded on - June 23, 2023</span>

                            </div>
                            <div className="column2">
                                <p>How become a pro UI/UX <br />
                                    Designer</p>
                                <div className='row3'>
                                    <span><span> <AiFillEye /> <span className='spanNumber'>{updateYoutubeData.views} </span></span></span>
                                    <span><span> < RiThumbUpFill /> <span className='spanNumber'>{updateYoutubeData.likes}</span></span></span>
                                    <span><span> <FaCommentAlt /> <span className='spanNumber'>{updateYoutubeData.comments}</span></span></span>
                                </div>
                            </div>
                        </div>

                        <div className="Maincolumn2">
                            <div className='Maincol2-inner'>
                                <span><FaIndianRupeeSign /> 989890</span>

                                <button> </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EarningOne
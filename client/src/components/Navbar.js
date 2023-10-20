import React from 'react'
import NavSearchBar from './NavSearchBar'
import { BiSolidPhone } from 'react-icons/bi'

const Navbar = ({ togglePopup }) => {
    return (
        <>
            <div className="navbar">
                <div className='nav-anchor'> Anchors </div>
                <div className='nav-box'>

                    {/* pass togglepopup to NavSearhBar component so toggle popup */}
                    <BiSolidPhone />{<NavSearchBar togglePopup={togglePopup} />}
                </div>
            </div>

        </>
    )
}

export default Navbar
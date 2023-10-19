import React from 'react'
import NavSearchBar from './NavSearchBar'
import {BiSolidPhone} from 'react-icons/bi'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className='nav-anchor'> Anchors </div>
                <div className='nav-box'> <button><BiSolidPhone/>{<NavSearchBar/>}</button>  </div>
            </div>

        </>
    )
}

export default Navbar
import React, { useState } from 'react'
//import { NavLink } from 'react-router-dom'
import '../styles/earning.css'
import EarningOne from '../components/EarningOne'
import EarningTwo from '../components/EarningTwo'
import Navbar from '../components/Navbar'
import Popup from '../pages/PopUp.js'

const EarningPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };




    return (
        <>
            <Navbar togglePopup={togglePopup} />
            <Popup isOpen={isOpen} togglePopup={togglePopup} />
            <EarningOne />
            <EarningTwo />
        </>
    )
}

export default EarningPage
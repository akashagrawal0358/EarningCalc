import React from 'react'
//import { NavLink } from 'react-router-dom'
import '../styles/earning.css'
import EarningOne from '../components/EarningOne'
import EarningTwo from '../components/EarningTwo'
import Navbar from '../components/Navbar'

const EarningPage = () => {
    return (
        <>
            <Navbar/>
            <EarningOne/>
            <EarningTwo/>
        </>
    )
}

export default EarningPage
import React from 'react'


//  togglepopup received from Navbar 
const NavSearchBar = ({togglePopup}) => {
  return (
    <div > 
        <button onClick={togglePopup}> Request a call back</button>
    </div>
  )
}

export default NavSearchBar
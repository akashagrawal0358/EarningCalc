import React, { useState } from 'react';
import '../styles/popup.css'


// isOpen, togglePopup defined in Earning page which is common 
// ancestral of Navar, Popup component 

const Popup = ({ isOpen, togglePopup }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    const response = await fetch(`http://localhost:8000/submitCallbackRequest?name=${name}&mobile=${mobile}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, // Obtain name from form input
        mobile, // Obtain phone from form input

      }),
    });
    // console.log(name + mobile);

    if (response.status === 200) {
      // Request was successful, show a success message in your React app.
    } else {
      // Handle the error case, display an error message to the user, etc.
    }


    setTimeout(() => {
      setIsSuccess(true);
    }, 2000);
  };



  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');


  return (
    <div>

      { isOpen && !isSuccess ? (

        <div className="popup">
          <div className="popup-content">
            <h2>Request a Callback</h2>
            <form method='post' action="/submitCallbackRequest" onSubmit={handleSubmit} >
              <div className="form-group">

                <input type="text" id="name" name="name" placeholder="Enter Name"
                  value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-group">

                <input type="text" id="phone"  name="mobile" placeholder="Mobile Number"
                  value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div>
              <button className="btn" type='button' onClick={togglePopup}  >
                Request a Callback
               
              </button>
            </form>
          </div>
        </div>

      )  :  null }
      { isSuccess && (
        <div className="popup">
          <div className="popup-content two">
          {/* <FontAwesomeIcon icon="fa-sharp fa-regular fa-circle-check" size="2xs" style={{color: "#34d399",}} /> */}
            <h3>Successfully Submitted</h3>
            <p>Our Team will call you shortly in <br/>
               12-24hrs

            </p>
            <p> Can't you wait for call?</p>
            <button className="btn btnn" >
              Check another video 
            </button>
          </div>
        </div>
     
     )}




      {isOpen && isSuccess && <div className="overlay" onClick={togglePopup} />}

    </div>


  );
};

export default Popup;

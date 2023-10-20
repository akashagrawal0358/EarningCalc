import React, { useState } from 'react';
import '../styles/popup.css'


// isOpen, togglePopup defined in Earning page which is common 
// ancestral of Navar, Popup component 

const Popup = ({ isOpen, togglePopup }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate a successful callback request
    // In a real application, you would send the request to your server here

    // For this example, let's assume the request is successful after 2 seconds
    setTimeout(() => {
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div>

      {isOpen && (

        <div className="popup">
          <div className="popup-content">
            <h2>Request a Callback</h2>
            <form onSubmit={handleSubmit} >
              <div className="form-group">

                <input type="text" id="name" name="name" placeholder="Enter Name" />
              </div>
              <div className="form-group">

                <input type="text" id="phone" name="phone" placeholder="Mobile Number" />
              </div>
              <button className="btn" onClick={togglePopup}>
                Request a Callback
              </button>
            </form>
          </div>
        </div>

      )}


      {/* creates a semi-transparent overlay covers entire page, making 
       the background content appear blurred and preventing interaction with it. */}

      {isSuccess && (
        <div className="success-message">
          <p>Success Message for Request Call Back:</p>
          <p>Your callback request has been successfully submitted. We will contact you shortly.</p>
          <button className="btn" onClick={togglePopup}>
            Close
          </button>
        </div>
      )}

    </div>


  );
};

export default Popup;

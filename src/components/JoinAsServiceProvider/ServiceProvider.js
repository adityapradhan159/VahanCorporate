import React from 'react';
import "./serviceProvider.css"

const ServiceProvider = () => {
  return (
    <div className='serviceProvider'>
        <div className="serviceProviderContainer">
            <div className="serviceImage1">
                <img src="./images/serviceImage1.svg" alt="" />
            </div>

            <div className="serviceProviderContent">
                <h3>Are you a Service Provider?</h3>
                <p>If you provide towing, mechanic or ambulance services you can start your journey with us</p>
                <button className="joinBtn">
                Join as a service provider
                </button>
            </div>

            <div className="serviceImage2">
                <img src="./images/serviceImage2.svg" alt="" />
            </div>

        </div>
    </div>
  )
}

export default ServiceProvider
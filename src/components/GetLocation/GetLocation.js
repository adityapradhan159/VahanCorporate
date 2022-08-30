import React from 'react'
import "./getLocation.css"

const GetLocation = () => {
  return (
    <div className='getLocation'>
        <div className="getLocationContainer">
            {/* ------------Location Image-------------- */}
            <div className="getLocationImg">
                <img src="./images/serviceLocation.svg" alt="" />
            </div>

            {/* ----------------Get Location Content----------------- */}
            <div className="locationContent">

                {/* ------------Live TRacking----------- */}
                <div className="liveTracking">
                    <div className="liveTrackingImg">
                        <img src="./images/liveTracking.svg" alt="" />
                    </div>
                    <h5>Roadside Assistance</h5>
                </div>


                <div className="locationHeader">
                    <h3>Get the location of your trips from anywhere</h3>
                </div>

                <div className="locationDetails">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet </p>
                </div>

                <div className="serviceIconsContainer">
                    {/* -------------------Trip Status--------------- */}
                    <div className="tripStatus">
                        <div className="serviceicon">
                            <img src="./images/wifi.svg" alt="" />
                        </div>
                        <p>Trip Status (Active, Emergency,Idle,Stopped)</p>
                    </div>

                    <div className="currentLocation">
                        <div className="serviceicon">
                            <img src="./images/currentLocation.svg" alt="" />
                        </div>
                        <p>Current Location</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default GetLocation
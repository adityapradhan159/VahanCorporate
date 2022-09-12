import React,{useEffect} from 'react'
import "./getLocation.css"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"



const GetLocation = () => {

gsap.registerPlugin(ScrollTrigger)

useEffect(() => {
    
    gsap.fromTo(".getLocationContainer", 
        {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            ease: "ease-in",
            duration: 2,
            scrollTrigger: {
              trigger: ".getLocation",
              start: "top 20%",
            }
          }
        );
}, [])



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
                    <h5>Live Tracking</h5>
                </div>


                <div className="locationHeader">
                    <h3>Get the location of your trips from anywhere</h3>
                </div>

                <div className="getLocationImg-mb">
                    <img src="./images/LocationGraphic.svg" alt="" />
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
import React from 'react'
import "./heroBanner.css"

const HeroBanner = () => {
  return (
    <div className='heroBanner'>
        <div className="heroImg">
            <img src="./images/heroImg.png" alt="" />
        </div>

        <div className="heroImgMobile">
        <img src="./images/heroBannerMb.svg" alt="" />
        </div>

        <div className="heroContent">
            <h1>Ensuring Safer Trips than Before</h1>
            <p>Maintain and manage your trucks with ease by enabling power of automated system </p>
            <div className="heroContentButtons">
                <button className='start-btn'>Get Started</button>
                <button className='demo-btn'>Get Demo</button>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
import React from 'react';
import "./howToStart.css"

const HowToStart = () => {
  return (
    <div className='howToStart'>
        <div className="howToStartContainer">
            <h3>Start managing your trucks with ease.</h3>
            <div className="startContent">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p>
            </div>
            <button className='getStartedBtn'>Get Started</button>

            <div className="howToStartStepsContainer">
                <div className="stepDivider">
                    <img src="./images/stepDivider.svg" alt="" />
                </div>
                
                <div className="howToStartStep">
                    <div className="stepIcon">
                        <img src="./images/form.svg" alt="" />
                    </div>
                    <div className="stepInfo">
                        <h5>Step 1: Fill out form</h5>
                        <p>Start using Vahan by just filling out few information.</p>
                    </div>
                    
                </div>

                <div className="howToStartStep">
                    <div className="stepIcon">
                        <img src="./images/approval.svg" alt="" />
                    </div>
                    <div className="stepInfo">
                        <h5> Step 2: Wait for Approval</h5>
                        <p>VSS team will verify the request and will send a confirmation of the approval</p>
                    </div>
                </div>

                <div className="howToStartStep">
                    <div className="stepIcon">
                        <img src="./images/monitorTrip.svg" alt="" />
                    </div>
                    <div className="stepInfo">
                        <h5>Step 3: Create & Monitor Trips</h5>
                        <p>Get the access of the system and start creating and monitoring trips</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default HowToStart
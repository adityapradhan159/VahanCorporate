import React,{useRef,useEffect} from 'react'
import "./services.css"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"



const Services = () => {

gsap.registerPlugin(ScrollTrigger)

const yourServiceRef = useRef(null)

useEffect(() => {
    
    gsap.fromTo(".yourService", 
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
              trigger: ".services",
              start: "top 20%",
            }
          }
        );
}, [])


  return (
    <div className='services'>
        <div className="yourService" ref={yourServiceRef}>
            <div className="serviceContent">
                <div className="roadAssistance">
                    <div className="roadAssistanceImg">
                        <img src="./images/roadAssistance.svg" alt="" />
                    </div>
                    <h5>Roadside Assistance</h5>
                </div>

                <div className="serviceHeader">
                    <h3>At your service.<br/>
                        Anytime! Anywhere!</h3>
                </div>
                <div className="truckImg-mb">
                    <img src="./images/truck-mb.svg" alt="" />
                </div>

                <div className="serviceDetails">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet </p>
                </div>

                <div className="serviceIconsContainer">
                    {/* -------------------Towing--------------- */}
                    <div className="towing">
                        <div className="serviceicon">
                            <img src="./images/towing.svg" alt="" />
                        </div>
                        <p>Towing</p>
                    </div>

                     {/* -------------------Police Service--------------- */}
                     <div className="policeService">
                        <div className="serviceicon">
                            <img src="./images/police.svg" alt="" />
                        </div>
                        <p>Police Service</p>
                    </div>

                    {/* -------------------Mechanical Service--------------- */}
                    <div className="mechanicalService">
                        <div className="serviceicon">
                            <img src="./images/mechanic.svg" alt="" />
                        </div>
                        <p>Mechanical Service</p>
                    </div>

                     {/* -------------------Medical Care--------------- */}
                     <div className="medicalCare">
                        <div className="serviceicon">
                            <img src="./images/ambulance.svg" alt="" />
                        </div>
                        <p>Medical Care</p>
                    </div>

                </div>


            </div>

            <div className="serviceImg">
                <img src="./images/serviceTruck.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Services
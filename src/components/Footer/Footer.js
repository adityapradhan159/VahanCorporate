import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footerContainer">
            {/* ----------Logo----------------- */}
            <div className="footerLogo">
                <img src="./images/VahanLogo.svg" alt="" />
            </div>

            {/* ----------About---------------- */}
            <div className="aboutContainer">
                <div className="aboutHeader">
                    <h5>About</h5>
                    <p>Who we are</p>
                    <p>Who Vahan</p>
                    <p>Career</p>
                </div>
            </div>

            {/* ----------More------------ */}
            <div className="aboutContainer">
                <div className="aboutHeader">
                    <h5>More</h5>
                    <p>Privacy Policy</p>
                    <p>Terms & Condition</p>
                   
                </div>
            </div>

            {/* ----------More------------ */}
            <div className="aboutContainer">
                <div className="aboutHeader">
                    <h5>Social Media</h5>
                    <div className="footerIconContainer">
                        <img src="./images/Facebook.svg" alt="" />
                        <p>Facebook</p>
                    </div>
                    <div className="footerIconContainer">
                        <img src="./images/Twitter.svg" alt="" />
                        <p>Twitter</p>
                    </div>
                    <div className="footerIconContainer">
                        <img src="./images/Instagram.svg" alt="" />
                        <p>Instagram</p>
                    </div>
                </div>
            </div>

            <div className="subscribeContainer">
                <h5>Subscribe to Newsletter</h5>

                <input placeholder='Email Address' type="text" className='subscribeInp'/>

                <button>Subscribe</button>
            </div>

        </div>
    </div>
  )
}

export default Footer
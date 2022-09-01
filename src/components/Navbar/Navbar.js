import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbarDiv'>
        <div className="navbarContainer">
            {/* --------------Vahan Logo-------------------- */}
            <div className="vahanLogo">
                <img src="./images/VahanLogo.svg" alt="" />
            </div>

            {/* -------------Get Started Button-------------- */}

            <div className="downloadAndGetStarted">
                <p>Go to Dashboard</p>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
import React,{useState} from 'react'
import "./navbar.css"

const Navbar = () => {

  const [showNavMenu,setShowNavMenu] = useState(false)

  return (
    <div className='navbarDiv'>
        <div className="navbarContainer">
            {/* --------------Vahan Logo-------------------- */}
            <div className="vahanLogo">
                <img src="./images/VahanLogo.svg" alt="" />
            </div>

            <div className="vahanLogoMobile">
                <img src="./images/vahanLogoMb.svg" alt="" />
            </div>

            {/* -------------Get Started Button-------------- */}
            <div className="menuBtn" onClick={() => setShowNavMenu(!showNavMenu)}>
              <img src="./images/navMenu.svg" alt="" />
            </div>


            <div className={showNavMenu ? "downloadAndGetStarted expanded" : "downloadAndGetStarted"}>
              <img src="./images/close.svg" alt="" onClick={() => setShowNavMenu(false)} className="closeMenu"/>
                <p>Go to Dashboard</p>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
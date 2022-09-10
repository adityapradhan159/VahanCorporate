import React from 'react'
import Faq from '../FAQ/Faq'
import Footer from '../Footer/Footer'
import GetLocation from '../GetLocation/GetLocation'
import HeroBanner from '../HeroBanner/HeroBanner'
import HowToStart from '../HowToGetStarted/HowToStart'
import ServiceProvider from '../JoinAsServiceProvider/ServiceProvider'
import Navbar from '../Navbar/Navbar'
import Queries from '../Queries/Queries'
import Services from '../Services/Services'
import VahanDetails from '../VahanDetails/VahanDetails'

const WebsiteContainer = () => {
  return (
    <>
        <Navbar/>
       <HeroBanner/>
        <VahanDetails/>
         <Services/>
        <GetLocation/>
       <Queries/>
         <HowToStart/>
         <ServiceProvider/>
       <Faq/>
         <Footer/>
    </>
  )
}

export default WebsiteContainer
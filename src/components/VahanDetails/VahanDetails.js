import React from 'react'
import "./vahanDetails.css"

const VahanDetails = () => {
  return (
    <div className='vahanDetails'>
        <div className="vahanDetailsContainer">
            {/* -----------Distance Covered------------ */}
            <div className="distanceCovered">
                <h4>2000+ Km</h4>
                <p>Distance covered in total</p>
            </div>

            {/* -------------Industries----------------- */}
            <div className="industriesServed">
                <h4>300+ Industries</h4>
                <p>Served with safety and trust</p>
            </div>

            {/* -------------Api Calls----------------- */}
            <div className="apiCalls">
                <h4>10+ Millions</h4>
                <p>API calls/month</p>
            </div>

            {/* ------------Clients Registered----------------- */}
            <div className="clientsRegistered">
                <h4>4+ Lakhs</h4>
                <p>Happy clients registered</p>
            </div>

        </div>

    </div>
  )
}

export default VahanDetails
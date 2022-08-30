import React from 'react'
import "./queries.css"

const Queries = () => {
  return (
    <div className='queries'>
        <div className="queriesContainer">

            <div className="queriesContent">
                <div className="vahanMitra">
                    <div className="supportImg">
                        <img src="./images/support.svg" alt="" />
                    </div>
                    <h5>24x7 Vahan Mitra</h5>
                </div>

                <div className="queriesHeader">
                <h3>We are here for any queries</h3>
                </div>

                <div className="queriesDetails">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet </p>
                </div>

                <div className="serviceIconsContainer">
                    {/* -------------------Call Service--------------- */}
                    <div className="callService">
                        <div className="serviceicon">
                            <img src="./images/call.svg" alt="" />
                        </div>
                        <p>Call Service</p>
                    </div>

                     {/* -------------------Chat Service--------------- */}
                     <div className="chatService">
                        <div className="serviceicon">
                            <img src="./images/chat.svg" alt="" />
                        </div>
                        <p>Chat Service</p>
                    </div>

                </div>
            </div>

            <div className="serviceImg">
                <img src="./images/queries.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Queries
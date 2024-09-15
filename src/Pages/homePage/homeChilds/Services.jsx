import React from 'react'
import "../Home.scss"

function Services() {
  return (
    <div className='Services my-4'>
        <div className="container py-4"> 
            <h1> OUR SERVICES </h1>
            <div className='row w-80 '> 
                <div className="col-6 col-md-3 ps-2"> 
                    <ul>
                        <li> Marketing </li>
                        <li>Tour package</li>
                        <li>Leisure .</li>
                    </ul>
                 </div>
                <div className="col-6 col-md-3 ps-2"> 
                    <ul>
                        <li> Visa Service  </li>
                        <li> Ticket  </li>
                        <li> Consulting </li>
                    </ul>
                    </div>
                <div className='col-6 col-md-3 ps-2'> 
                    <ul>
                        <li> Travel  </li>
                        <li> Medical   </li>
                        <li>  assistance</li>
                    </ul>
                </div>

                <div className='col-6 col-md-3 ps-2'> 
                    <ul>
                        <li>Travel  </li>
                        <li> Medical checkup  </li>
                        <li> Passenger  </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services

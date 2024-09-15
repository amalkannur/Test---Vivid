import React from 'react'
import "../Home.scss"
import DateSelector from '../../../Components/DateSelector'

function Booking() {
  return (
    <section className='Booking mb-4'>
        <div className="booking-card"> 
            <h2> Hey, Book Your  <br /> Next Holiday Destination</h2>
            <form action="/action_page.php">
                <div className="row"> 
                    <div className="col-md-3 mb-4 mb-md-2 d-flex flex-column px-2"> 
                        <label htmlFor="cars">Destination</label>
                        <select className='options' name="cars" id="cars">
                            <option value="volvo"> Germany </option>
                            <option value="saab">Saab</option>
                        </select>
                    </div>

                   




                    <div className="col-md-3 mb-4 mb-md-2 d-flex flex-column justify-content-end px-2"> 
                        <label htmlFor="cars">Date</label>
                        <div> 
                             <DateSelector />
                         </div>
                    </div>


                    <div className="col-md-3 mb-4 mb-md-2 d-flex flex-column px-2"> 
                        <label htmlFor="cars">Person</label>
                        <select className='options' name="cars" id="cars">
                            <option value="1"> 1 </option>
                            <option value="2">2</option>
                            <option value="3"> 3 </option>
                            <option value="4">4</option>
                            <option value="5"> 5 </option>
                            <option value="6">6</option>
                            <option value="7"> 7 </option>
                            <option value="8 or more">8 or more</option>
                        </select>
                    </div>

                    <div className="col-md-3 mb-4 mb-md-2 d-flex flex-column justify-content-end px-2"> 
                    <button className='yellow-btn' type="submit" value="Submit"> Explore  </button>
                    </div>
                    
                </div>
            </form>
        </div>
    </section>
  )
}

export default Booking

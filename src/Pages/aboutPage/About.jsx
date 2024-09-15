import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "./About.scss"
import abtCarImg from "../../assets/images/abt-carimg.png"

function About() {
  return (
    <div>
      <Header />
         <section className='abt-banner'> 
            <div className="row container text-start"> 
              <div className="col-md-6"> 
              <h1> Mission: Turning Dreams into Journeys</h1>
              <p> 
                 Welcome to Vivid Tours and Travels, your passport to unforgettable travel experiences! We are a passionate team of travel enthusiasts dedicated to crafting seamless and memorable journeys for our clients. Whether you're a solo explorer, a couple seeking a romantic getaway, or a family looking for adventure, we have the expertise to turn your travel dreams into reality.
              </p>
              <button className='abt-btn'> Know more </button>
              </div>
            </div>
         </section>

         <section className='about-sec p-4 p-md-5'>
           <div className="container"> 
             <div className="row"> 
               <div className="col-sm-6 abt-imgdiv-parent p-0  p-md-5"> 
                 <div className="abt-imgdiv "> 
                   <img src={abtCarImg}  alt="" />
                 </div>
               </div>
               <div className="col-sm-6 p-0  p-md-5"> 
                 <h5> Features </h5>
                 <h1> We are always working to provide you best of 
                      ourselves in all 
                      aspects.</h1>
                  <p> 
                  At Vivid Tours and travels, we believe in responsible tourism. We strive to minimize our environmental impact and contribute positively to the communities we visit. From supporting local businesses to promoting sustainable travel practices, we are dedicated to preserving the beauty of our planet for future generations.
                  </p>
                  <button className='abt-btn '> Learn More </button>
               </div>
             </div>

             <div className='abt-container py-5'> 
                <h5> Our Benefits </h5>
                <h1> By Join Our Travel Community, One Can Avail a Lot Of Benefits.</h1>
                <p> Connect with Like-Minded Travelers: Immerse yourself in a community of passionate travelers who share a love for exploration and adventure. </p>
             </div>
             
             <div className="row"> 
               <div className="col-sm-6 col-md-4"> 
                  <div className="abt-card"> 
                    <h4> 01 </h4>
                    <h5> Exclusive Travel Insights </h5>
                    <p> 
                        First Dibs on Special Offers: Be the first to know about exclusive travel deals, discounts, and promotions ... <a href="">Read More</a>
                    </p>
                  </div>
               </div>

               <div className="col-sm-6 col-md-4"> 
                  <div className="abt-card"> 
                    <h4> 02 </h4>
                    <h5> Community-Driven Travel Tips </h5>
                    <p> 
                        First Dibs on Special Offers: Be the first to know about exclusive travel deals, discounts, and promotions ... <a href="">Read More</a>
                    </p>
                  </div>
               </div>

               <div className="col-sm-6 col-md-4"> 
                  <div className="abt-card"> 
                    <h4> 03 </h4>
                    <h5> Virtual Travel Events & Webinars </h5>
                    <p> 
                        First Dibs on Special Offers: Be the first to know about exclusive travel deals, discounts, and promotions ... <a href="">Read More</a>
                    </p>
                  </div>
               </div>

               <div className="col-sm-6 col-md-4"> 
                  <div className="abt-card"> 
                    <h4> 04 </h4>
                    <h5> Travel Recommendations </h5>
                    <p> 
                        First Dibs on Special Offers: Be the first to know about exclusive travel deals, discounts, and promotions ... <a href="">Read More</a>
                    </p>
                  </div>
               </div>

               <div className="col-sm-6 col-md-4"> 
                  <div className="abt-card"> 
                    <h4> 05 </h4>
                    <h5> Travel Companionship </h5>
                    <p> 
                        First Dibs on Special Offers: Be the first to know about exclusive travel deals, discounts, and promotions ... <a href="">Read More</a>
                    </p>
                  </div>
               </div>

               <div className="col-sm-6 col-md-4"> 
                  <div className="abt-card"> 
                    <h4> 06 </h4>
                    <h5> Travel Stories </h5>
                    <p> 
                        First Dibs on Special Offers: Be the first to know about exclusive travel deals, discounts, and promotions ... <a href="">Read More</a>
                    </p>
                  </div>
               </div>


             </div>

           
           </div>
         </section>


      <Footer />
    </div>
  )
}

export default About

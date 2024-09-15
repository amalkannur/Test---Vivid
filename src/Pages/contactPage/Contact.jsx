import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import "../contactPage/Contact.scss" 

function Contact() {
  return (
    <div>
      <Header />
       <div className="contact"> 
         <div className="container"> 
          <h5> FEEL FREE TO </h5>
          <h1> Contact Us </h1>
          <div className="row"> 
            <div className="col-md-5"> 
              <h3> Stay Connected </h3>
              <h5> +91 000000000 </h5>
              <h5> demo@gmail.com </h5>
            </div>
            <div className="col-md-7">
                <h2>Share Your Details to Us</h2>
                <form action="/action_page.php">
  
                  <input  type="text" id="Name" name="Name"  placeholder="Your Name"/> <br />
                  <input  type="text" id="Residence" name="Residence"  placeholder="Place of Residence"/> <br />
                  <input  type="email" id="Email" name="Email"  placeholder=" Email"/> <br />
                  <input  type="text" id="Phone" name="Phone"  placeholder="Phone"/> <br />
                  <input type="submit" defaultValue="Submit" />
                </form>
            </div>
          </div>
         </div>
       </div>
      <Footer />
    </div>
  )
}

export default Contact

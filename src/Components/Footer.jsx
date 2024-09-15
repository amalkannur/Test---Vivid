import React from 'react'
import "./Footer.scss"

function Footer() {
  return (
    <footer className='py-5'> 
         <div className='container'>
         <div className="row"> 
            <div className="col-md-3 d-flex flex-column justify-content-start"> 
                 <h5> Demo </h5>
                 <p> <b> Address</b> </p>
                 <p> 
                 Irinave road junction , <br />  kannurKerala,  <br />  670301 
                 </p>
                 <p className='mt-2'> <b> Support Phone</b> </p>
                 <p> +91 9895012628</p>
                 <p> +91 9745524103</p>
                 <p className='mt-2'> <b> Email: vividabc@gmail.com</b> </p>
                 <p> Response time usually 4 hours </p>
            </div>

            <div className="col-md-3 d-flex flex-column justify-content-start"> 
                 <h5> ABOUT US </h5>
                 <p> <a href=""> How It Works </a> </p>
                 <p> <a href=" "> Start Planning </a> </p>
                 <p> <a href=" "> About Us</a></p>
                 <p> <a href=" "> Blog</a> </p>
                 <p> <a href=" "> Reviews</a> </p>
                 <p> <a href=" "> Trip Inspiration</a> </p>
                 <p> <a href=" "> Contact Us</a> </p>
            </div>

            <div className="col-md-3 d-flex flex-column justify-content-start"> 
                 <h5> FROM THE BLOG  </h5>
                 <p> <a href=""> Travel Guides</a> </p>
                 <p><a href=""> Planning Your Trip</a></p>
                 <p><a href=""> Product Guide</a></p>
                 <p><a href=" "> Guest Posts</a></p>
                 <p><a href=""> Destinations</a></p>
                 <p><a href=""> Tours</a></p>
                 <p><a href=""> Webinars</a></p>
            </div>

            <div className="col-md-3 d-flex flex-column justify-content-start"> 
                 <h5> GET SOCIAL </h5>
                 <p>
                    Keep upto date with all latest
                    and breaking social media news
                    <br /> <br />
                    There are lots of things 
                    happening this year
                 </p>
                 <p> <b> FONT AWESOME SOCIAL MEDIA </b> </p>
            </div>

         </div>

        </div>
    </footer>
  )
}

export default Footer
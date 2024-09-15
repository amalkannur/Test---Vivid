import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Planning from '../homePage/homeChilds/Planning' 
import "../destinationPage/Destinations.scss"
import cardimage1 from "../../assets/images/cardimg1.jpg"
import cardimage2 from "../../assets/images/cardimg2.jpg"
import cardimage3 from "../../assets/images/cardimg3.jpg"
import cardimage4 from "../../assets/images/cardimg4.jpg"


function Destinations() {
  return (

    <div className='destinations'>
      <Header />
      <div className="container"> 
        <div className="destination_card "> 
            <h1> GRAB YOUR BEST OFFERS & DEALS BEFORE IT ENDS !! </h1>
            <p> Take a look at Your Destination Below  </p>

              <form action="/action_page.php">
                  <select name="cars" id="cars">
                    <option value="volvo">India </option>
                    <option value="saab">UAE </option>
                    <option value="opel">QUATAR </option>
                    <option value="audi">SAUDI ARABIA</option>
                  </select>
                  <br />
          
                  <input type="submit" defaultValue="Search"  value="Search" />
              </form>

        </div>


        <div className="destination__result"> 
          <h1> KERALA </h1>
          <p> 
            There's no easy way to say it: unless you are traveling with one of our specialists, you simply won't get the depth of experience -
            the wisest guides, the closest wilderness encounters, the real people and events that spell the difference between a regular
            package tour and a sublime, once-in-a-lifetime vacation. But don't take our word for it. Listen to our travelers.
          </p>
          <div className="row"> 
            <div className="col-md-3">  
              <div className="result_card"> 
                <img  src={cardimage1} alt="" />
                <h5>Athirappalli  </h5>
                <p> Lorem Ipsum dolor sit amet yexte w so d  as sds kjaoisa  Olasnnervb xghatygs hxsasgv asas  </p>
                <a> Show More </a>
                  
              </div>
            </div>
            <div className="col-md-3">
               <div className="result_card"> 
               <img  src={cardimage2} alt="" />
               <h5> Wayanad </h5>
               <p> Lorem Ipsum dolor sit amet yexte w so d  as sds kjaoisa  Olasnnervb xghatygs hxsasgv asas  </p>
               <a> Show More </a>
                 
              </div>
            </div>
            <div className="col-md-3">
               <div className="result_card"> 
               <img  src={cardimage3} alt="" />
               <h5> kochi </h5>
               <p> Lorem Ipsum dolor sit amet yexte w so d  as sds kjaoisa  Olasnnervb xghatygs hxsasgv asas  </p>
               <a> Show More </a>
              </div>
            </div>
            <div className="col-md-3">
               <div className="result_card"> 
               <img  src={cardimage4} alt="" />
               <h5> Kozhikode </h5>
               <p> Lorem Ipsum dolor sit amet yexte w so d  as sds kjaoisa  Olasnnervb xghatygs hxsasgv asas  </p>
               <a> Show More </a>                
                
              </div>
            </div>
          </div>
          <Planning />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Destinations

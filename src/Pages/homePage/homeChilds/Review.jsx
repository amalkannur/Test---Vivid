import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home.scss"
import Carosoulimage from "../../../assets/images/abt-carimg.png"

function Review() {

  var review_settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };


  return (
    <div className='Review py-4 py-md-5 text-md'>
      <h5> Customer Reviews  </h5>
      <div className="container pt-2"> 
         <div className="row"> 
            <div className="col-md-6 py-2"> 
                <h1>THE PEOPLE WHO KNOW THE BEST </h1>
                <p className='grey_text'> 
                There's no easy way to say it: unless you are traveling with one of our specialists, you simply won't get the depth of experience -
                the wisest guides, the closest wilderness encounters, the real people and events that spell the difference between a regular
                package tour and a sublime, once-in-a-lifetime vacation. But don't take our word for it. Listen to our travelers.
                </p>
            </div>
            <div className="col-md-6 py-2"> 

            <Slider className="" {...review_settings}> 
            <div className="card-review"> 
                <div className="row"> 
                  <div className="col-4"> 
                    <div className="img-div"> 
                      <img className='w-100' src={Carosoulimage} alt="" />
                    </div>
                  </div>
                  <div className="col-8"> 
                    <h5> 
                     TOUR OF INDIA, DELHI, VARANASI,
                      AGRA, JAIPUR, 
                      BARLI, TAJ MAHAL
                    </h5>
                    <p>
                        Few things command more respect than hard work, integrity,
                        dedication and the ability to follow through. These are among the
                        many attributes we experienced from start to finish when
                        organizing our trip to India with this travel agent.
                    </p>
                  </div>

                </div>
              </div>

              <div className="card-review"> 
                <div className="row"> 
                  <div className="col-4"> 
                    <div className="img-div"> 
                    <img className='w-100' src={Carosoulimage} alt="" />
                    </div>
                  </div>
                  <div className="col-8"> 
                    <h5> 
                     TOUR OF INDIA, DELHI, VARANASI,
                      AGRA, JAIPUR, 
                      BARLI, TAJ MAHAL
                    </h5>
                    <p>
                        Few things command more respect than hard work, integrity,
                        dedication and the ability to follow through. These are among the
                        many attributes we experienced from start to finish when
                        organizing our trip to India with this travel agent.
                    </p>
                  </div>

                </div>
              </div>


              <div className="card-review"> 
                <div className="row"> 
                  <div className="col-4"> 
                    <div className="img-div"> 
                    <img className='w-100' src={Carosoulimage} alt="" />
                    </div>
                  </div>
                  <div className="col-8"> 
                    <h5> 
                     TOUR OF INDIA, DELHI, VARANASI,
                      AGRA, JAIPUR, 
                      BARLI, TAJ MAHAL
                    </h5>
                    <p>
                        Few things command more respect than hard work, integrity,
                        dedication and the ability to follow through. These are among the
                        many attributes we experienced from start to finish when
                        organizing our trip to India with this travel agent.
                    </p>
                  </div>

                </div>
              </div>
            </Slider>

           
            </div>
         </div>
      </div>
    </div>
  )
}

export default Review

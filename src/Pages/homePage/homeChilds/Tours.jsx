import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Home.scss"
import DelhiImg from "../../../assets/images/newdelhi_img1.png"

export default function SimpleSlider() {
  var tours_settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
       <div className="Tours container my-4"> 

           <h1> Featured Domestic Tours</h1>

          <Slider  {...tours_settings}>

            <div className="p-3"> 
              <div className="card">
                  <div className="img-div"> 
                      <img className="w-100" src={DelhiImg} alt="" />
                  </div>
                  <div className="content-div"> 
                    <div className="destination_hdr"> 
                      <h4> New Delhi </h4>
                    </div>
                    <div className="offer_div"> 
                        <h5> 
                        Upto 30 % Off on Family tour
                        </h5>
                    </div>
                  </div>
                 <div className="p-3"> 
                  <h4 className="rating_h4"> 4.6 * </h4>
                    <p className="description_p"> 
                    Lorem ipsum dolor sit amet lorem ipsum dolordolor met sit amet ipsum dolor sit amet lorem 
                    ipsum dolor dolor met sit amet
                    </p>
                    <button className="seamore_btn"> see more </button>
                 </div>
              </div>
            </div>

            <div className="p-3"> 
              <div className="card">
                  <div className="img-div"> 
                      <img className="w-100" src={DelhiImg} alt="" />
                  </div>
                  <div className="content-div"> 
                    <div className="destination_hdr"> 
                      <h4> New Delhi </h4>
                    </div>
                    <div className="offer_div"> 
                        <h5> 
                        Upto 30 % Off on Family tour
                        </h5>
                    </div>
                  </div>
                 <div className="p-3"> 
                  <h4 className="rating_h4"> 4.6 * </h4>
                    <p className="description_p"> 
                    Lorem ipsum dolor sit amet lorem ipsum dolordolor met sit amet ipsum dolor sit amet lorem 
                    ipsum dolor dolor met sit amet
                    </p>
                    <button className="seamore_btn"> see more </button>
                 </div>
              </div>
            </div>



            <div className="p-3"> 
              <div className="card">
                  <div className="img-div"> 
                      <img className="w-100" src={DelhiImg} alt="" />
                  </div>
                  <div className="content-div"> 
                    <div className="destination_hdr"> 
                      <h4> New Delhi </h4>
                    </div>
                    <div className="offer_div"> 
                        <h5> 
                        Upto 30 % Off on Family tour
                        </h5>
                    </div>
                  </div>
                 <div className="p-3"> 
                  <h4 className="rating_h4"> 4.6 * </h4>
                    <p className="description_p"> 
                    Lorem ipsum dolor sit amet lorem ipsum dolordolor met sit amet ipsum dolor sit amet lorem 
                    ipsum dolor dolor met sit amet
                    </p>
                    <button className="seamore_btn"> see more </button>
                 </div>
              </div>
            </div>

            <div className="p-3"> 
              <div className="card">
                  <div className="img-div"> 
                      <img className="w-100" src={DelhiImg} alt="" />
                  </div>
                  <div className="content-div"> 
                    <div className="destination_hdr"> 
                      <h4> New Delhi </h4>
                    </div>
                    <div className="offer_div"> 
                        <h5> 
                        Upto 30 % Off on Family tour
                        </h5>
                    </div>
                  </div>
                 <div className="p-3"> 
                  <h4 className="rating_h4"> 4.6 * </h4>
                    <p className="description_p"> 
                    Lorem ipsum dolor sit amet lorem ipsum dolordolor met sit amet ipsum dolor sit amet lorem 
                    ipsum dolor dolor met sit amet
                    </p>
                    <button className="seamore_btn"> see more </button>
                 </div>
              </div>
            </div>



            </Slider>

       </div>
  );
}
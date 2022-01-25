import React, { Component } from "react";
import Slider from "react-slick";
import './partners.css';


export default class PartnersSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: false,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="sliders-brands">
        
        <Slider {...settings}>
          <div>
           
          <img src="./images/clients/brand1.png"></img>
          </div>
          <div>
    
            
          <img src="./images/clients/brand1.png"></img>
          </div>
          <div>
            
          <img src="./images/clients/brand2.png"></img>
          </div>
          <div>
          <img src="./images/clients/brand3.png"></img>
          </div>
          <div>
          <img src="./images/clients/brand1.png"></img>
          </div>
          <div>
          <img src="./images/clients/brand1.png"></img>
          </div>
          <div>
          <img src="./images/clients/brand1.png"></img>
          </div>
          <div>
          <img src="./images/clients/brand1.png"></img>
          </div>
        </Slider>
      </div>
    );
  }
}
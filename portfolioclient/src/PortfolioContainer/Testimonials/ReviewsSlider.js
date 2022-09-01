import React, { Component } from "react";
import Slider from "react-slick";
import Testimonialtemplate from './templatetestimonail'
import './Testimonials.css'


export default class ReviewsSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 4,
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
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1
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
      <div id="review-sliders" >
        
        <Slider {...settings}>
         
          <div>
            
<Testimonialtemplate 
        Clientname="Jeffrey Kelly"
        Clientbrand="AssetLab Marketing"
        Clientreview=" Timely good quality Wordpress Work"/> 
          </div>
          <div>
            
<Testimonialtemplate 
        Clientname="Kevin"
        Clientbrand=" 24/7 Tech Inc"
        Clientreview=" Mahdi work very well with specific directions"/> 
          </div>
          <div>
          <Testimonialtemplate 
        Clientname="Jean"
        Clientbrand="bikelio"
        Clientreview=" Again Mahdi did a nice job - Looking froward to work again together."/> 
          </div>
         
          
          
          
        </Slider>
      </div>
    );
  }
}
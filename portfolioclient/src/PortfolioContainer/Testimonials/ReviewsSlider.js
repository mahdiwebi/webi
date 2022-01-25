import React, { Component } from "react";
import Slider from "react-slick";
import Testimonialtemplate from './templatetestimonail'
import './Testimonials.css'


export default class ReviewsSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 2000,
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
      <div id="review-sliders">
        
        <Slider {...settings}>
          <div>
           
<Testimonialtemplate 
        Clientname="Tech Pro"
        Clientbrand="Showtag.tv"
        Clientreview=" Timely good quality Wordpress Work"/> 
          </div>
          <div>
            
<Testimonialtemplate 
        Clientname="Tech Pro"
        Clientbrand="Showtag.tv"
        Clientreview=" Timely good quality Wordpress Work"/> 
          </div>
          <div>
            
<Testimonialtemplate 
        Clientname="Tech Pro"
        Clientbrand="Showtag.tv"
        Clientreview=" Timely good quality Wordpress Work"/> 
          </div>
          <div>
          <Testimonialtemplate 
        Clientname="Tech Pro"
        Clientbrand="Showtag.tv"
        Clientreview=" Timely good quality Wordpress Work"/> 
          </div>
          <div>
          <Testimonialtemplate 
        Clientname="Tech Pro"
        Clientbrand="Showtag.tv"
        Clientreview=" Timely good quality Wordpress Work"/> 
          </div>
          <div>
          <Testimonialtemplate 
        Clientname="Tech Pro"
        Clientbrand="Showtag.tv"
        Clientreview=" Timely good quality Wordpress Work"/> 
          </div>
          <div>
          <Testimonialtemplate 
        Clientname="Tech Pro"
        Clientbrand="Showtag.tv"
        Clientreview=" Timely good quality Wordpress Work"/> 
          </div>
          <div>
          <Testimonialtemplate 
        Clientname="Tech Pro"
        Clientbrand="Showtag.tv"
        Clientreview=" Timely good quality Wordpress Work"/> 
          </div>
        </Slider>
      </div>
    );
  }
}
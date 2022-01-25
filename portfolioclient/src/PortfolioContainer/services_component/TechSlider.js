import React, { Component } from "react";
import Slider from "react-slick";
import Techtemplate from "./Techtemplate";
import './Techtemplate.css'



export default class TechSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
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
      <div id="Tech-slider">
        
        <Slider {...settings}>
          <div>
           <Techtemplate
            src={'./images/skills/tech1.png'}
           />

          </div>
          <div>
          <Techtemplate
            src={'./images/skills/tech2.png'}
           />

          </div>
          <div>
          <Techtemplate
            src={'./images/skills/tech3.png'}
           />

          </div>
          <div>
          <Techtemplate
           src={'./images/skills/tech4.png'}
           />

          </div>
          <div>
          <Techtemplate
            src={'./images/skills/tech5.png'}
           />


          </div>
          <div>
          <Techtemplate
           src={'./images/skills/tech6.png'}
           />


          </div>
          <div>
          <Techtemplate
            src={'./images/skills/tech7.png'}
           />
          </div>
          <div>
          <Techtemplate
           src={'./images/skills/tech8.png'}
           />
          </div>
          <div>
          <Techtemplate
           src={'./images/skills/tech9.png'}
           />
          </div>
          <div>
          <Techtemplate
           src={'./images/skills/tech10.png'}
           />
          </div>
          <div>
          <Techtemplate
           src={'./images/skills/tech11.png'}
           />
          </div>
        </Slider>
      </div>
    );
  }
}
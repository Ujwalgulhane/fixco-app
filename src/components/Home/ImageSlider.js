import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import marketing from "../../Assets/Client imgs/1.jpg";
import data1 from "../../Assets/Colleges imgs/sl-new-1.jpg";
import data2 from "../../Assets/Client imgs/23.jpg";
import data3 from "../../Assets/Client imgs/4.jpg";
import data4 from "../../Assets/Client imgs/5.jpg";
export const ImageSlider = () => {



const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px'
}
const slideImages = [
  {
    url: data1,
  },
  {
    url: marketing,
  },
  {
    url: data2,
  },
  {
    url: data3,
  },
  {
    url: data4,
  },
];
  return (
    <div className="slide-container">
    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div key={index}>
          <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
            <span></span>
          </div>
        </div>
      ))} 
    </Slide>
  </div>
  )
}

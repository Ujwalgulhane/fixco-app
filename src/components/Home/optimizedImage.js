import React from 'react'
import web from "../../Assets/Client imgs/11.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const optimizedImage = () => {
  return (
    <div style={{textAlign:"center"}}>
      <LazyLoadImage
    alt={web}
    effect="blur"
    src={web} 
    // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
    height="100px"
    width="200px"
    />
    </div>
  )
}

export default optimizedImage
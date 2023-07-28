import React from 'react'
import Marquee from 'react-fast-marquee';
import img1 from '../../Assets/Client imgs/1.jpg';
import img2 from '../../Assets/Client imgs/2.jpg';
import img3 from '../../Assets/Client imgs/3.jpg';
import img4 from '../../Assets/Client imgs/4.jpg';
import img5 from '../../Assets/Client imgs/5.jpg';
import img6 from '../../Assets/Client imgs/6.jpg';
import img7 from '../../Assets/Client imgs/7.jpg';
import img8 from '../../Assets/Client imgs/8.jpg';
import img9 from '../../Assets/Client imgs/9.jpg';
import img10 from '../../Assets/Client imgs/10.jpg';


const clientimgslider = () => {
  return (<>
   
  <div>
    <Marquee direction="left" speed={100} delay={2}>
      <div className="image_wrapper" >
        <img src={img1} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
      <div className="image_wrapper">
        <img src={img2} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
      <div className="image_wrapper">
        <img src={img3} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
      <div className="image_wrapper">
        <img src={img4} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
      <div>
        <img src={img5} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
      <div className="image_wrapper">
        <img src={img6} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
      <div className="image_wrapper">
        <img src={img7} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
      <div className="image_wrapper">
        <img src={img8} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
      <div className="image_wrapper">
        <img src={img9} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
      <div className="image_wrapper">
        <img src={img10} alt="" style={{width:"300px", height:"200px"}}/>
      </div>
    </Marquee>
  </div>
  </>
  )
}

export default clientimgslider
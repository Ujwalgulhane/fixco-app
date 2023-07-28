import React, {useEffect} from 'react'
import web from "../../Images/home.jpg";
import Common from "../Common";
import WorkCounterSection from './WorkCounterSection';
import Imgnewslider from './imgnewslider';

// import Clientimgslider from './clientimgslider';
// import { ImageSlider } from './ImageSlider';

const Home = (props) => {
  const updatenumber = () =>{
    props.setProgress(100)
  }
  const updateData = async ()=> {
    props.setProgress(30);
  }

useEffect(() => {
    updateData(); 
    // eslint-disable-next-line
}, [])
  return (
    
     <div className="mb-4">
      {(props.setProgress(50))}
     <Common 
       name="Get your final year project with "
       imgsrc={web}
       visit="/service"
       btname="Get Started" 
     />
     {(props.setProgress(70))}
     <WorkCounterSection/>
     {/* <ImageSlider/> */}
     {/* <Clientimgslider/> */}
     <Imgnewslider/>
     {(updatenumber())}
    {/* <OptimizedImage/> */}
   </div>
    
  );
};

export default Home;

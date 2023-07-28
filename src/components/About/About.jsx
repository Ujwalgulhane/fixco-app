import React,{useEffect} from "react";
import web from "../../Images/about.png";
import Common from "../Common";

const About = (props) => {
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
    <>
     {(props.setProgress(50))}
      <Common name = "Welcome to About Us Page" imgsrc={web} visit="/contact" btname= "Contact Now"  />
      {(props.setProgress(70))}
      {(updatenumber())}
    </>
  );
};

export default About;

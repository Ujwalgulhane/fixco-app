import React,{useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
const WorkCounterSection = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    // Our Work counter Section Start from here
    <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        
    <div class="counter" style={{background:"#6674CC",color: "white",}}>
    <div class="container">
        <div class="row p-4">
            <div class="col-12 col-lg-3">
                 <div class="count-up">
     
                  <h2 className="counter-count">{counterOn && <CountUp start={0} end={100} duration={3} delay={0} />}+</h2>
                  <p style={{fontSize:"1.3rem"}}>Project Completed</p>
                </div>
            </div>

            <div class="col-12 col-lg-3 ">
                <div class="count-up">
                <h2 className="counter-count">{counterOn && <CountUp start={0} end={150} duration={3} delay={0}/>}+</h2>
                    <p style={{fontSize:"1.3rem"}}>Happy Clients</p>
                </div>
            </div>

            <div class="col-12 col-lg-3">
                <div class="count-up">
                <h2 className="counter-count">{counterOn && <CountUp start={0} end={125} duration={3} delay={0}/>}+</h2>
                <p style={{fontSize:"1.3rem"}}>Followers on Instagram</p>
                </div>
            </div>

             <div class="col-12 col-lg-3">
               <div class="count-up">
               <h2 className="counter-count">{counterOn && <CountUp start={0} end={10} duration={3} delay={0}/>}+</h2>
               <p style={{fontSize:"1.3rem"}}>No. of College Completed</p>
                </div>
            </div>
        </div>
    </div>
</div>
</ScrollTrigger>
   
  )
}

export default WorkCounterSection
import React,{useState,useEffect} from "react";
import ProjectCard from "./ProjectCards";
import CardData from "./CardData";

import Loader from '../Loader';
import { Container, Row, Col,  } from "react-bootstrap";

const Service = () => {
  const [loading, setLoading] = useState(false);

useEffect(() => { 
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
}, [])

  return (
    <div>
     
    {
    loading ?
    <Loader
    loading={loading}/>
    :
    <Container fluid className="project-section">
      <Container>
        
        <h1 className="project-heading">
          Our <strong className="purple">Services</strong>:
        </h1>
        <p style={{ color: "#011229"} } className="padalign">
          Here are our services We've worked recently.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        {CardData.map((value, index) => {
                          return <Col md={4} className="project-card"> 
                          <ProjectCard 
                          key={index} 
                          imgsrc={value.imgsrc} 
                          title={value.title} description={value.description} />
                          </Col>;
                        })}
        </Row>
      </Container>
    </Container>
    
  }
</div>
  );
};

export default Service;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsDownload } from "react-icons/bs";
import { NavLink } from "react-router-dom";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      
      <Card.Img variant="top" src={props.imgsrc} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
        {props.description}
        </Card.Text>
        <NavLink variant="primary" to="project-details" className="projectbtn">
          <BsDownload /> &nbsp;
          {"Know more"}
        </NavLink>
        {"\n"}
        {"\n"}

        

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

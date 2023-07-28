import React from "react";
import { NavLink } from "react-router-dom";
import Type from "./Type";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const Common = (props) => {
  
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row  mt-1">
            <div className="col-10 mx-auto">
              <div className="row">
                
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  
                  <h1>
                    <strong className="brand-name"> FIXCO.IN</strong>
                  </h1>
                  <h1><div className="getname" style={{ padding: 0, textAlign: "left" }}>
                <Type />
              </div></h1>
                  
                  <h3 className="getnme my-2">  
                    We are the team of talented developers making your projects
                  </h3>
                  <div className="mt-1 mb-5">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <LazyLoadImage alt={props.imgsrc} effect="blur" src={props.imgsrc} 
      // placeholderSrc = {process.env.PUBLIC_URL + "/fixco.jpg"}
      // height="200px"
      // width="300px"
      className="img-fluid animated"
    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;

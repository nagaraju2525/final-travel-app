import React from "react";
import TourImage from "./images/kerala4.jpg";
import "./Body.css";
const Body = () => {
  return (
    <div>
      <h1 className="body-heading">Our Popular Trips</h1>
      <div className="main">
      <div className="card w-25 card-image">
        <div className="card-body">
        <img
            src={TourImage}
            alt="tour"
            width="100%"
            height="100%"
            style={{ borderRadius: "12px" }}
          />
        </div>
      </div>
      <div className="card w-75 cardTwo">
        <div className="card-body card-one">
        <div className="content-paragraph">
            <h3 className="aa">Kerala</h3>
            <p className="paragraph">
              Kerala, a state situated on the tropical Malabar Coast of
              southwestern India, is one of the most popular tourist
              destinations in the country. Named as one of the ten paradises of
              the world by National Geographic Traveler,[1] Kerala is famous
              especially for its ecotourism initiatives and beautiful
              backwaters.[2] Its unique culture and traditions, coupled with its
              varied demography, have made Kerala one of the most popular
              tourist destinations in the world. Growing at a rate of 13.31%,
              the tourism industry is a major contributor to the state's
              economy.[3]
            </p>
            <button className="btn btn-success visit-button">Visit</button>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Body;

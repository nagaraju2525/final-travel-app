import React from "react";
import "./Body.css";
import Ladakh from './images/ladakh.jpg'
const BodyTwo = () => {
  return (
    <div>
      <div className="body-two">
        <div className="card w-75 cardThree">
          <div className="card-body second-cardImage">
            <div className="content-paragraphTwo">
              <h3 className="bb">Ladakh</h3>
              <p className="paragraphTwo">
                The largest town in Ladakh is Leh, followed by Kargil, each of
                which headquarters a district.[17] The Leh district contains the
                Indus, Shyok and Nubra river valleys. The Kargil district
                contains the Suru, Dras and Zanskar river valleys. The main
                populated regions are the river valleys, but the mountain slopes
                also support the pastoral Changpa nomads. The main religious
                groups in the region are Muslims (mainly Shia) (46%), Buddhists
                (mainly Tibetan Buddhists) (40%), Hindus (12%) and others
                (2%).[18][19] Ladakh is one of the most sparsely populated
                regions in India. Its culture and history are closely related to
                that of Tibet.
              </p>
              <button className="btn btn-success ">Visit</button>
            </div>
          </div>
          
        </div>
        <div className="card w-25 card-image">
        <div className="card-body">
        <img
            src={Ladakh}
            alt="tour"
            width="100%"
            height="100%"
            style={{ borderRadius: "12px" }}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default BodyTwo;

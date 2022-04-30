import React from "react";
import "./ImageInfo.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TajMahal from "./pexels-sudipta-mondal-1603650.jpg";
import IndiaGate from "./pexels-asif-methar-789750.jpg";
import Charminar from "./pexels-trimurthy-9025814.jpg";
import Fade from 'react-reveal/Fade';
const ImageInfo = () => {
  return (
    <div data-aos="fade-up">
      <br />
      <Stack>
     
        <div className="aa-md">
          <div className="dropdown">
          <Fade left>
            <Avatar  style={{cursor:"pointer"}}
              alt="indiaGate"
              src={IndiaGate}
              sx={{ width: 250, height: 250 }}
            />
              </Fade>
            <div className="dropdown-content">
              <div className="dropdown-image">
                <div className="image-content">
                  <h1 className="image-discription">India Gate</h1>
                  <div>
                    <p>
                      India Gate is one of many British monuments built by order
                      of the Imperial War Graves Commission . The architect was
                      Sir Edwin Lutyens, an Englishman who designed numerous
                      other war memorials and was also the principal planner of
                      New Delhi.
                    </p>
                  </div>

                  <a className="learn-more" href="!#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
          <Fade top>
            <Avatar
              alt="indiaGate"
              src={TajMahal}
              sx={{ width: 250, height: 250 }}
            />
          </Fade>
            <div className="dropdown-content">
              <div className="dropdown-imageTwo">
                <div className="image-content">
                  <h1 className="image-discription">Taj Mahal</h1>
                  <div>
                    <p>
                      Taj Mahal, also spelled Tadj Mahall, mausoleum complex in
                      Agra, western Uttar Pradesh state, northern India. The Taj
                      Mahal was built by the Mughal emperor Shah Jahān (reigned
                      1628–58) to immortalize his wife Mumtaz Mahal
                    </p>
                  </div>

                  <a className="learn-more" href="!#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown">
            <Fade right>
            <Avatar
              alt="indiaGate"
              src={Charminar}
              sx={{ width: 250, height: 250 }}
            />
            </Fade>
            <div className="dropdown-content">
              <div className="dropdown-imageThree">
                <div className="image-content">
                  <h1 className="image-discription">Charminar</h1>
                  <div>
                    <p>
                      Charminar, (Urdu: “Four Minarets”) historic monument
                      located at the heart of Hyderabad, west-central Telangana
                      state, south-central India. The city, which is the capital
                      of both Telangana and Andhra Pradesh states, was also the
                      capital of the historic princely state of Hyderabad.
                    </p>
                  </div>

                  <a className="learn-more" href="!#">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </Stack>
    </div>
  );
};

export default ImageInfo;

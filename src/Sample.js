import React from "react";
import "./Sample.css";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sample = () => {
  return (
    <div className="header-md">
       
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          <a className="navbar-brand" href="!#">
            Travel Your Way
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to="/login">
                <li className="nav-item">
                  <button className="btn btn-light">
                    Login
                    </button>
                </li>
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="!#">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <NavDropdown title="Places" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Agra</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    New Delhi
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Mumbai</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Rajasthan
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.5">
                    Rishikesh
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.6">
                    Varanasi
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-info" type="submit">
                Search
              </button> &nbsp; &nbsp;
              
            </form>
          </div>
        </div>
      </nav>
     
    </div>
  );
};

export default Sample;

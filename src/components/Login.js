import React, { useState } from "react";
import "./Login.css";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";

import { Link } from "react-router-dom";
import { auth } from "./firebase-config";
const Login = () => {
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  // const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  // const login = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword
  //     );
  //     console.log(user);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  // const logout = async () => {
  //   await signOut(auth);
  // };
  return (
    <div className="main-register-auto myForm">
     <form className="myForm">
     <center><h1 className="register-title-auto">User Login</h1></center><br />
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="inputPassword6" className="col-form-label">
            email
          </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputusername"
            className="form-control"
            placeholder="enter email"
           // onChange={(event) => {
              //   setLoginEmail(event.target.value);
              // }}
           
          />
        </div>
      </div>
      <br />
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="inputPassword6" className="col-form-label">
            Password
          </label>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="col-auto">
          <input
            type="password"
            className="form-control"
            placeholder="enter password"
             // onChange={(event) => {
              //   setLoginPassword(event.target.value);
              // }}
          />
        </div>
      </div>
      <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              <p style={{ color: "whitesmoke" }}>Agree Terms And Conditions</p>
            </label>
          </div>
          <Link to="/mainpage">
          {/* onClick={login} */}
            <button  type="submit" className="btn btn-primary">
              Login
            </button>
          </Link>{" "}
          &nbsp; &nbsp;
          <Link to="/register">
            <button className="btn btn-success">Register</button>
          </Link>
          <br />
          <div>
            <p>
              forgot your password?{" "}
              <a className="reset" style={{ color: "blue" }}>
                Reset Password
              </a>
            </p>
            <div>
              {/* {user.email} and onClick={logout} */}
              <a 
                
                style={{ color: "red", cursor: "pointer" }}
              >
                logout
              </a>
            </div>
          </div>
      
     
      
      
     </form>
    </div>
  );
};

export default Login;

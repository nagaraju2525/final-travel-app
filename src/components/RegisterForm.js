import React, { useState } from "react";

import "./RegisterForm.css";
import { Link } from "react-router-dom";
// import { createUserWithEmailAndPassword, onAuthStateChanged, updateCurrentUser } from "firebase/auth";
// import {auth} from "./firebase-config";
const RegisterForm = () => {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//   const [user,setUser] = useState({});

//   onAuthStateChanged(auth, (currentUser)=>{
//     setUser(currentUser);
//   })

//  const register = async () => {
//     try {
//        const user = await createUserWithEmailAndPassword(
//         auth,
//         registerEmail,
//         registerPassword
//       );
//       console.log(user);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

  return (
    <div className="main-register-auto myForm">
     <form className="myForm">
     <center><h1 className="register-title-auto">Registration Form</h1></center>
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="inputPassword6" className="col-form-label">
            username
          </label> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </div>
        <div className="col-auto">
          <input
            type="text"
            id="inputusername"
            className="form-control"
            placeholder="enter username"
           
          />
        </div>
      </div><br />
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="inputPassword6" className="col-form-label">
            email
          </label>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;&nbsp;&nbsp;
        </div>
        <div className="col-auto">
          <input
            type="email"
           
            className="form-control"
            placeholder="@email"
            // onChange={(event) => {
            //   setRegisterEmail(event.target.value);
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className="col-auto">
          <input
            type="password"
           
            className="form-control"
            placeholder="enter password"
            // onChange={(event) => {
            //   setRegisterPassword(event.target.value);
            // }}
          />
        </div>
      </div>
      <br />
      <div className="row g-3 align-items-center">
        <div className="col-auto">
          <label for="inputPassword6" className="col-form-label">
            confirm Password
          </label>&nbsp;&nbsp;
        </div>
        <div className="col-auto">
          <input
            type="password"
            id="inputPassword6"
            className="form-control"
            placeholder="confirm password"
          />
        </div>
      </div>
      <div className="submit-btn">
        {/* {user.currentUser.email} */}
        <Link to="/submit">
        {/* onClick={register}  */}
          <a className="btn btn-success">Submit</a>
        </Link>
      </div>
     </form>
    </div>
  );
};

export default RegisterForm;

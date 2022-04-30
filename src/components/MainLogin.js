<div className="aa">
      <div className="login-form-md">
        <form className="main-form">
          <h1 className="login-name">Login Form</h1>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              email:
            </label>
            <input
              type="email"
              className="form-control login-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Your Email Details"
              // onChange={(event) => {
              //   setLoginEmail(event.target.value);
              // }}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control login-inputTwo"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              // onChange={(event) => {
              //   setLoginPassword(event.target.value);
              // }}
            />
            <div id="emailHelp" className="form-text">
              <p style={{ color: "whitesmoke" }}>
                {" "}
                We'll never share your password with anyone else.
              </p>
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
    </div>

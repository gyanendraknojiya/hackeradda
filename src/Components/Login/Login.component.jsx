import React, { useState } from "react";
import swal from "sweetalert";
import firebase from "firebase";

import "./Login.styles.css";

const LoginPage = ({ handleLoginPopup }) => {
  const [User, setUser] = useState({});
  const handleFormChange = (e) => {
    User[e.target.name] = e.target.value;
    setUser(User);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const { email, password } = User;
    if (!email || !password) {
      swal("Error", "Please enter your email and password!", "error");
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err);
        swal("Error", err.message, "error");
      });

  };

  return (
    <>
      <div className="login-display">
        <div className="login-box">
          <h2 className="text-center">Login</h2>
          <form
            className="mt-3"
            action=""
            method="POST"
            onSubmit={handleLoginSubmit}
          >
            <div className="text-center sign-up-text">
              Do not have an account?{" "}
              <span
                className="cursor-pointer signup-btn py-2 "
                onClick={() => handleLoginPopup()}
              >
                signup
              </span>{" "}
              here...
            </div>
            <div className="form-group">
              <label>
                <i class="fas fa-envelope"></i> Email ID
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                // autoFocus
                autoComplete="off"
                onChange={handleFormChange}
              />
            </div>
            <div className="form-group">
              <label>
                <i class="fas fa-key"></i> Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={handleFormChange}
              />
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-light login-btn">
                Login <i class="fas fa-sign-in-alt"></i>
              </button>
            </div>
          </form>
          <div className="hr-line">--------------- or ---------------</div>
          <div className="form-group text-center">
            <button className="btn btn-danger login-btn">
              <i class="fa fa-google fa-fw"></i> Login with google
            </button>
          </div>
          {/* <div className="form-group text-center">
          <button className="btn btn-primary login-btn"><i class="fa fa-facebook fa-fw"></i> Login with facebook</button>
        </div> */}
          <div className="form-group text-center">
            <button className="btn login-btn github-login">
              <i class="fa fa-github fa-fw"></i> Login with github
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;

import React, { useState } from "react";

import "./Register.styles.css";
import LoginPage from "../../Components/Login/Login.component";
import SignupPage from "../../Components/Signup/Signup.component";
import logo from "../../logo.png"
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleSignupPopup = () => {
    setShowSignupPopup(false);
    setShowLoginPopup(true);
    setShowSignup(false);
  };

  const handleLoginPopup = () => {
    setShowSignupPopup(true);
    setShowLoginPopup(false);
    setShowSignup(true);
  };

  const handleHidePopup = () => {
    setShowSignupPopup(false);
    setShowLoginPopup(false);
    setShowSignup(false);
  };

  return (
    <>
      <div className="row login-bg m-0">
        <div className="col-lg-7 col-md-6 side-layer p-0">
          <span className="reg-layer-1"></span>
          <span className="reg-layer-2"></span>
          <span className="reg-layer-3"></span>
          <span className="reg-layer-4"></span>
          <div className="sideBar text-center">
            <img src={logo} alt="Logo" className="reg-logo" />
            <div className="welcome-text">Welcome to</div>
            <div className="d-inline-flex">
              <span className="main-text">HACKERADDA</span>
              <span className="my-auto">.com</span>
            </div>

            <p className="reg-bottom-text">A social media for programmers</p>
            <div className="side-layer-btn m-3">
              <button
                className="btn btn-outline-info btn-sm mx-3"
                onClick={handleSignupPopup}
              >
                Login
              </button>{" "}
              or
              <button
                className="btn btn-outline-warning btn-sm mx-3"
                onClick={handleLoginPopup}
              >
                Register
              </button>
            </div>
            <div className="text-center p-0" style={{letterSpacing:".5px"}} ><Link to="/"><span className="btn btn-primary btn-sm ">Back to home</span></Link></div>
          </div>
          {/* --------------------- Mobile login and register popup ---------------------------- */}

          {showSignupPopup && showSignup && (
            <div className="register-popup-box">
              <span className="hide-popup cursor-pointer" onClick={handleHidePopup}>
                X
              </span>
              <SignupPage handleSignupPopup={handleSignupPopup} />
            </div>
          )}
          {showLoginPopup && !showSignup && (
            <div className="register-popup-box">
              <span className="hide-popup" onClick={handleHidePopup}>
                X
              </span>{" "}
              <LoginPage handleLoginPopup={handleLoginPopup} />
            </div>
          )}
        </div>
        <div className="reg-box col-lg-5 col-md-6  p-0 ">
          <div className="Login-block">
            <span className="reg-layer-5">
              <span className="reg-layer-6">
                {showSignup ? (
                  <SignupPage handleSignupPopup={handleSignupPopup} />
                ) : (
                  <LoginPage handleLoginPopup={handleLoginPopup} />
                )}
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

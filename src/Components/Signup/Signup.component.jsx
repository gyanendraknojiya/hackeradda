import React, { useState } from "react";

import "./Signup.styles.css";
import swal from "sweetalert";
import firebase from "firebase"

const SignupPage = ({ handleSignupPopup }) => {

  const [User, setUser] = useState({})

  const handleFormChange = (e) => {
    const Name = e.target.name;
    const Value = e.target.value;
    User[Name] = Value;
    setUser({ ...User })
  }

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    const { fName, lName, email, password, confirmPassword, phone } = User;

    if (!fName || !lName || !email || !password || !confirmPassword, !phone) {
      swal("Error", "All fields are required!", "error")
      return;
    }
    if (password !== confirmPassword) {
      swal("Error", "Your password do not match!", "error")
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password).then((doc)=>{
      console.log(doc);
      firebase.firestore().collection("Users").doc(doc.user.uid).set({
        fullName: fName + " " + lName,
        fName: fName,
        lName: lName,
        email: email,
        phone: phone
      })
    }).catch(err=> console.log(err))
  }

  return <>
    <div className="login-display">
      <div className="login-box">
        <h2 className="text-center">SignUp</h2>
        <form className="mt-3" method="POST" action="" onSubmit={handleSignupSubmit}>
          <div className="row p-0 m-0 py-2">
            <div className="form-group col  pl-0 py-0 my-0 mr-1">
              <label><i class="fas fa-user"></i> First Name</label>
              <input type="text" name="fName" className="form-control"  autoFocus autoComplete="off" onChange={handleFormChange} />
            </div>
            <div className="form-group col pr-0 ml-0 py-0 my-0">
              <label><i class="fas fa-user"></i> Last Name</label>
              <input type="text" name="lName" className="form-control" autoComplete="off" onChange={handleFormChange} />
            </div>
          </div>
          <div className="form-group">
            <label><i class="fas fa-envelope"></i> Email ID</label>
            <input type="email" name="email" className="form-control" autoComplete="off" onChange={handleFormChange} />
          </div>
          <div className="form-group">
            <label><i class="fas fa-phone-alt"></i> Mobile Number</label>
            <input type="text" name="phone" className="form-control" autoComplete="off" onChange={handleFormChange} />
          </div>
          <div className="row p-0 m-0 py-2">
            <div className="form-group col  pl-0 py-0 my-0 mr-1">
              <label><i class="fas fa-key"></i> Password</label>
              <input type="password" name="password" className="form-control" onChange={handleFormChange} />
            </div>
            <div className="form-group col pr-0 ml-0 py-0 my-0 ">
              <label><i class="fas fa-key"></i> Confirm Password</label>
              <input type="password" name="confirmPassword" className="form-control" onChange={handleFormChange} />
            </div>
          </div>
          <div className="form-group text-center">
            <button type="submit" className="btn btn-light login-btn">Create account <i class="fas fa-user-plus"></i></button>
          </div>


        </form>
        <div className="hr-line py-2">--------------- or ---------------</div>

        <div className="text-center mt-3 sign-up-text">Already have an account? <span className="cursor-pointer signup-btn p-0 " style={{ marginTop: "-4px" }} onClick={() => handleSignupPopup()}>Login</span> here...</div>
      </div>
    </div>

  </>;
};

export default SignupPage;

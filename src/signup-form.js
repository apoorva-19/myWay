import React from "react";

const SignUpForm = () => {
  return (
    <>
      <form className="form">
        <center>
          <h3>Sign Up</h3>
          <p className="header2">It's quick and easy</p>
          <div className="form-control">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
          </div>
          <div className="form-control">
            <input type="email" id="email" name="email" placeholder="Email" />
          </div>
          <div className="form-control">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button className="" type="submit">
            Sign Up
          </button>
        </center>
      </form>
    </>
  );
};

export default SignUpForm;

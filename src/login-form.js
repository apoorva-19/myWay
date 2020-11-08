import React from "react";

const LoginForm = () => {
  return (
    <>
      <form className="form">
        <h3>Login</h3>
        <div className="box">
          <h3 className="login-heading">Student</h3>
          <hr className="student-line" />
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
          <div className="forgot-password-div">
            <a href="#" className="forgot-password">
              Forgot Password
            </a>
          </div>
          <button type="submit">Login</button>
          <div className="new-to-myways-text-div">
            <a href="#" className="new-to-myways-text">
              New to MyWays? Sign Up here
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginForm;

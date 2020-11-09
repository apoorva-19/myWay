import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SignUpForm from "./signup-form";
import OtpForm from "./otp-form";
import Thankyou from "./thank-you";

const MainContent = () => {
  const [showStateSignup, setShowStateSignup] = useState(false);

  const onOpenModalSignup = () => {
    setShowStateSignup(true);
  };
  const onCloseModalSignup = () => {
    setShowStateSignup(false);
  };
  return (
    <div className="main-content">
      <h3 className="header1">Apply and hear back every time</h3>
      <p className="header2">
        Exploring internships or jobs? Say good-bye to the typical job portals
        and use the power of Artificial Intelligence to become successful,
        faster.
      </p>
      <center>
        <button
          className="login-button content-btn"
          onClick={() => onOpenModalSignup()}
        >
          Get Started
        </button>
        <Modal
          modalId="signup-modal"
          open={showStateSignup}
          onClose={() => onCloseModalSignup()}
          classNames="sign-up-modal"
        >
          <SignUpForm />
          {/* <OtpForm /> */}
          {/* <Thankyou /> */}
        </Modal>
        {/* <Modal
          modalId="otp-modal"
          open={showStateOtp}
          onClose={() => onCloseModalOtp()}
          classNames="sign-up-modal"
        >
          <OtpForm />
        </Modal> */}
      </center>
    </div>
  );
};

export default MainContent;

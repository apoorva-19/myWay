import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import SignUpForm from "./signup-form";

const MainContent = () => {
  const [showState1, setShowState1] = useState(false);

  const onOpenModal1 = () => {
    setShowState1(true);
  };
  const onCloseModal1 = () => {
    setShowState1(false);
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
          onClick={() => onOpenModal1()}
        >
          Get Started
        </button>
        <Modal
          open={showState1}
          onClose={() => onCloseModal1()}
          classNames="sign-up-modal"
        >
          <SignUpForm />
        </Modal>
      </center>
    </div>
  );
};

export default MainContent;

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import myWaysLogo from "./asset/images/myways_logo.png";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import LoginForm from "./login-form";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [showStateLogin, setShowStateLogin] = useState(false);

  const onOpenModalLogin = () => {
    setShowStateLogin(true);
  };
  const onCloseModalLogin = () => {
    setShowStateLogin(false);
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={myWaysLogo} alt="myWays" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={`${
            showLinks ? "links-container show-container" : "links-container"
          }`}
        >
          <ul className="links">
            <li>
              <a href="#">For You</a>
            </li>
            <li>
              <a href="/instant-apply">
                <span className="instant-apply">Instant Apply</span>
              </a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/about-us">About us</a>
            </li>
            <li>
              <a href="#" className="sign-up">
                SIGN UP
              </a>
            </li>
            <li>
              <button
                className="login-button"
                onClick={() => onOpenModalLogin()}
              >
                <h2>LOGIN</h2>
              </button>
              <Modal open={showStateLogin} onClose={() => onCloseModalLogin()}>
                <LoginForm />
              </Modal>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

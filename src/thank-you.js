import React from "react";
import thankyouTick from "./asset/images/Tick.svg";

const Thankyou = () => {
  return (
    <div>
      <img src={thankyouTick} alt="Done" />
      <h2>Thanks. Successful!</h2>
    </div>
  );
};

export default Thankyou;

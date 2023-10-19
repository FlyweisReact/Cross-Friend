/** @format */

import React, { useState } from "react";
import { login } from "../Repository/Api";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const LoginHandler = () => {
    const payload = { mobileNumber };
    login(payload);
  };

  return (
    <div className="Login-Div">
      <form>
        <p>Enter Your Mobile Number</p>
        <input
          type="tel"
          onChange={(e) => setMobileNumber(e.target.value)}
          minLength={8}
          maxLength={12}
        />
        <p className="get_otp">Get Otp</p>
        <p>OTP</p>
        <input type="tel" pattern="[0-9]{10}" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;

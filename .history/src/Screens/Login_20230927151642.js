/** @format */

import React, { useState } from "react";
import { login, verify_otp } from "../Repository/Api";

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [ otp , setOtp ] = useState('')

  const LoginHandler = () => {
    const payload = { mobileNumber };
    login(payload);
  };

  const verifyHandler = () => {
    const payload = { mobileNumber , otp}
    verify_otp(payload)
  }

  return (
    <div className="Login-Div">
      <form onSubmit={verifyHandler} >
        <p>Enter Your Mobile Number</p>
        <input
          type="tel"
          onChange={(e) => setMobileNumber(e.target.value)}
          minLength={8}
          maxLength={12}
        />
        <p className="get_otp" onClick={() => LoginHandler()}>
          Get Otp
        </p>
        <p>OTP</p>
        <input type="tel" pattern="[0-9]{4}" onC  />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;

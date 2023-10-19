/** @format */

import React from "react";

const Login = () => {
  return (
    <div className="Login-Div">
      <form>
        <p>Enter Your Mobile Number</p>
        <input type="tel" />
        <p className="get_otp" >Get Otp</p>
        <p>OTP</p>
        <input type="tel"  />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

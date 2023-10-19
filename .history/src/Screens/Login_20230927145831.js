/** @format */

import React from "react";

const Login = () => {
  return (
    <div className="Login-Div">
      <form>
        <p>Enter Your Mobile Number</p>
        <input type="tel" />
        <p className="get" >Get Otp</p>
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;

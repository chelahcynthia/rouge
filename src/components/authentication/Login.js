import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-box">
      <h2>Welcome Back!</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required=""></input>
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required=""></input>
          <label>password</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;

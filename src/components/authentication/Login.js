import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="main">
      <div className="login-container">
        <section className="wrapper"></section>
        <div className="heading">
          <h1 className="text text-large">LogIn</h1>
          <p className="text text-normal">
            New User?{" "}
            <span>
              <a href="#" className="text text-links">
                Create an account
              </a>
            </span>
          </p>
        </div>
        <form name="login" className="form">
          <div className="input-control">
            <label for="email" className="input-label" hidden>Email Address</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

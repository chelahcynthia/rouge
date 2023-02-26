import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <img
        src="https://res.cloudinary.com/dfdxhrjcc/image/upload/v1677142774/rouge/misolo_vzrcme.jpg"
        alt="login"
        className="login-img"
      />

      <form className="login-form">
        <h1 className="form-title">Welcome Back</h1>
        <div className="form-inputs">
          <label>Email</label>
          <br />
          <input type="email" placeholder="example@test.com"></input>
        </div>
        <div className="form-inputs">
          <label>Password</label>
          <br />
          <input type="password" placeholder="Min 6 characters long"></input>
        </div>
        <div className="form-inputs">
          <button className="login-btn" type="submit">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;

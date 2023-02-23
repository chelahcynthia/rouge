import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <img
        src="https://res.cloudinary.com/dfdxhrjcc/image/upload/v1676545829/rouge/pexels-pnw-production-8490222_dsu7ba.jpg"
        alt="login"
        className="login-img"
      />

      <form className="login-form">
        <div className="form-title">Login</div>
        <div className="form-inputs">
          <label>Email</label>
          <br />
          <input type="email" placeholder="example@test.com"></input>
        </div>
        <div className="form-inputs">
          <label>password</label>
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

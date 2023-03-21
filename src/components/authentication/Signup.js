import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="signup-container">
      <div className="sign-brand">Create Your Account!</div>
      <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          className="sign-input"
          type="text"
          placeholder="Enter your first name"
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        ></input>
        <input
          className="sign-input"
          type="text"
          placeholder="Enter your last name"
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        ></input>
        <input
          className="sign-input"
          type="email"
          placeholder="Example@test.com"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        ></input>
        <input
          className="sign-input"
          type="text"
          placeholder="Enter your username"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        ></input>
        <input
          className="sign-input"
          type="password"
          placeholder="Enter your password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        ></input>
        <input
          className="sign-input"
          type="password"
          placeholder="Confirm Password"
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        ></input>
        <button type="submit" className="signup-btn">
          SignUp
        </button>
      </form>
      <p className="redirect-link">
        Already have an account?{" "}
        <Link className="rlink" to="/login">
          Login here
        </Link>
      </p>
    </div>
  );
}

export default Signup;

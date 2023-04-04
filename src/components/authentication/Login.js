import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    fetch("http://localhost:4000/auth/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((res) => {
      if (res.ok) {
        console.log("success");
        console.log(res.headers.get("access-token"));
        console.log(res.headers);
        navigate("/");
      }
    });
  };

  return (
    <div className="login-box">
      <h2>Welcome Back!</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="user-box">
          <input
            type="email"
            name=""
            required
            placeholder="Email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div className="user-box">
          <input
            type="password"
            name=""
            required
            placeholder="Password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <p className="redirect-link">
        Don't have an account?{" "}
        <Link className="rlink" to="/signup">
          Register here
        </Link>
      </p>
    </div>
  );
}

export default Login;

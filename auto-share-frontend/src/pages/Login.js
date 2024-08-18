import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './../styles/Login.css';
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', 
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/dashboard";
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      alert("Login failed");
      console.error("Login error:", error); // Log error for debugging
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
        <button type="submit">Login</button>
        <div className="login-redirect">
        <button onClick={() => navigate("/register")} >Don't have an account? Register</button>
        </div >
      </form>
    </div>
  );
}

export default Login;
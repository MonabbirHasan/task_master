import React, { useState } from "react";
import "./forgot-password.css";
import { FormControl } from "@mui/material";
import { Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert("Password reset link sent to your email!");
  };

  return (
    <div className="forgot-password-container">
      <div className="form-wrapper">
        <h2>Reset Your Password</h2>
        <p className="form-description">
          Enter your email address and we’ll send you a link to reset your
          password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FormControl fullWidth>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
            </FormControl>
            <label htmlFor="email"></label>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn-submit">
            Send Reset Link
          </button>
        </form>
        <p className="form-link">
          <NavLink to="/login">Back to Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;

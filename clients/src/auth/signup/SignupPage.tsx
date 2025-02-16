import React, { useState } from "react";
import { Container, Form, Button, InputGroup } from "react-bootstrap";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./signup-page.css";
import { NavLink } from "react-router-dom";

const SignupPage = () => {
  const [FullName, setFullName] = useState("");
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState({ password: "", confirmPassword: "" });

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const validatePassword = (value: any) => {
    const passwordRules =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    return passwordRules.test(value);
  };

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);
    setError((prev) => ({
      ...prev,
      password: validatePassword(value)
        ? ""
        : "Password must be at least 12 characters long, include uppercase letters, lowercase letters, numbers, and special characters.",
    }));
  };
  // handleConfirmPasswordChange
  const handleConfirmPasswordChange = (e: any) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setError((prev) => ({
      ...prev,
      confirmPassword: value === password ? "" : "Passwords must be the same.",
    }));
  };
  // HANDLE SIGNUP
  const handleSignUp = (e: any) => {
    e.preventDefault();
    alert("Sign Up Successful!");
  };

  return (
    <Container className="sign-up-container">
      <div className="form-wrapper">
        <h2>Create an Account</h2>
        <p className="form-description">
          Join us today to access exclusive features and content.
        </p>
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3">
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={password}
              onChange={handlePasswordChange}
              error={!!error.password}
              helperText={error.password}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <TextField
              fullWidth
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              variant="outlined"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              error={!!error.confirmPassword}
              helperText={error.confirmPassword}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
            />
          </Form.Group>
          <Button
            type="submit"
            variant="primary"
            className="btn-submit"
            disabled={!!error.password || !!error.confirmPassword}
          >
            Sign Up
          </Button>
        </Form>
        <p className="pt-3 m-0 text-capitalize">
          don't have an account please signup <NavLink to={"/"}>login</NavLink>
        </p>
      </div>
    </Container>
  );
};

export default SignupPage;

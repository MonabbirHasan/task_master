import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { TextField, Card, IconButton, InputAdornment } from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    setError("");
    // Handle login logic here
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Card className="p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            className="mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!error}
          />
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            className="mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          {error && <p className="text-danger text-center">{error}</p>}
          <Button variant="primary" className="w-100 mb-3" type="submit">
            Login
          </Button>
        </form>
        <div className="text-center mb-2">
          <a href="#" className="text-decoration-none">
            <NavLink to="/forgot-password">Forgot Password?</NavLink>
          </a>
        </div>
        <div className="text-center mb-3">OR</div>
        <Button
          variant="outline-danger"
          className="w-100 mb-2 d-flex align-items-center justify-content-center"
        >
          <GoogleIcon className="me-2" /> Login with Google
        </Button>
        <Button
          variant="outline-primary"
          className="w-100 d-flex align-items-center justify-content-center"
        >
          <FacebookIcon className="me-2" /> Login with Facebook
        </Button>
        <p className="pt-3 m-0 text-capitalize">
          don't have an account please signup{" "}
          <NavLink to={"/signup"}>SignUp</NavLink>
        </p>
      </Card>
    </Container>
  );
};

export default LoginPage;

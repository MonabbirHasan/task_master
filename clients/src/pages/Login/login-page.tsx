import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";
import {
  Google as GoogleIcon,
  Facebook as FacebookIcon,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import HomePage from "../Home/Home";

const Login: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;
    if (!passwordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 12 characters long, include a capital letter, small letter, number, and special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <div style={styles.leftSide}>
          <img src="/path/to/logo.png" alt="Logo" style={styles.logo} />
          <Typography variant="h5" style={styles.title}>
            Welcome Back
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<GoogleIcon />}
            fullWidth
            style={styles.socialButton}
          >
            Login with Google
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<FacebookIcon />}
            fullWidth
            style={styles.socialButton}
          >
            Login with Facebook
          </Button>
        </div>
        <Divider orientation="vertical" flexItem style={styles.divider} />
        <div style={styles.rightSide}>
          <Typography variant="h6" style={styles.subtitle}>
            Login to Your Account
          </Typography>
          <form style={styles.form}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={handlePasswordChange}
              helperText={passwordError}
              error={Boolean(passwordError)}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={togglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={styles.button}
              onClick={HomePage}
              disabled={Boolean(passwordError)}
            >
              Login
            </Button>
            <Typography variant="body2" style={styles.link}>
              <a href="/forgot-password">Forgot Password?</a>
            </Typography>
            <Typography variant="body2" style={styles.link}>
              Don't have an account? <a href="/Signup">Sign Up</a>
            </Typography>
          </form>
        </div>
      </Card>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f7f7f7",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "700px",
    width: "100%",
  },
  leftSide: {
    flex: 1,
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rightSide: {
    flex: 1,
    padding: "1rem",
  },
  title: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  subtitle: {
    marginBottom: "1rem",
    textAlign: "center",
  },
  socialButton: {
    marginTop: "0.5rem",
    padding: "0.75rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    marginTop: "1.5rem",
    padding: "0.75rem",
  },
  link: {
    marginTop: "1rem",
    textAlign: "center",
  },
  divider: {
    width: "2px",
    backgroundColor: "#ccc",
  },
  logo: {
    width: "100px",
    height: "auto",
    marginBottom: "1rem",
  },
};

export default Login;

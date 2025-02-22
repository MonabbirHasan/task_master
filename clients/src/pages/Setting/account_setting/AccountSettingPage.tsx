import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./account_setting_page.css";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
const AccountSettingsPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    phone: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // Handle Input Change
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Save Changes
  const handleSave = (e: any) => {
    e.preventDefault();
    if (
      formData.newPassword &&
      formData.newPassword !== formData.confirmPassword
    ) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    setSuccess("Your account settings have been updated successfully!");
  };

  return (
    <div className="account-settings-card">
      <h1>Account Settings</h1>

      {/* Success / Error Messages */}
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSave}>
        {/* Account Info */}
        <div className="account_setting_account_info">
          <Form.Group className="mb-3">
            <TextField
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <TextField
              label="Username"
              name="username"
              fullWidth
              variant="outlined"
              value={formData.username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <TextField
              label="Phone Number"
              name="phone"
              fullWidth
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
            />
          </Form.Group>
        </div>

        {/* Change Password */}
        <div className="account_setting_change_password">
          <h2>Change Password</h2>
          <Form.Group className="mb-3">
            <TextField
              label="New Password"
              name="newPassword"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="outlined"
              value={formData.newPassword}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Form.Group>

          {/* Confirm Password Field */}
          <Form.Group className="mb-3">
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              variant="outlined"
              value={formData.confirmPassword}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Form.Group>
        </div>

        {/* Save & Cancel Buttons */}
        <div className="account_setting_action_btn">
          <ButtonComponent
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            style={{
              textTransform: "capitalize",
              background: "var(--primary-color)",
              color: "var(--text-light)",
            }}
            btn_label={"save changes"}
            variant={undefined}
            size={undefined}
            color={undefined}
            disabled={false}
          />
          <ButtonComponent
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            style={{
              textTransform: "capitalize",
              background: "var(--error-color)",
              color: "var(--text-light)",
              border: "none",
            }}
            btn_label={"cancel"}
            variant={undefined}
            size={undefined}
            color={undefined}
            disabled={false}
          />
        </div>
      </Form>

      {/* Deactivate Account Section */}
      <div className="deactivate-account">
        <h5>Deactivate Account</h5>
        <p>
          If you deactivate your account, you will lose access to all your data.
        </p>
        <ButtonComponent
          onClick={function (): void {
            throw new Error("Function not implemented.");
          }}
          style={{
            textTransform: "capitalize",
            background: "var(--error-color)",
            color: "var(--text-light)",
            border: "none",
          }}
          btn_label={"Deactivate Account"}
          variant={undefined}
          size={undefined}
          color={undefined}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default AccountSettingsPage;

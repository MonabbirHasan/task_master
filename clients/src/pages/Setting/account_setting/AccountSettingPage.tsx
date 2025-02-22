import React, { useState } from "react";
import {  Form, Button, Alert } from "react-bootstrap";
import { TextField, Box } from "@mui/material";
import "./account_setting_page.css";
const AccountSettingsPage: React.FC = () => {
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
      <h2 className="mb-4">Account Settings</h2>

      {/* Success / Error Messages */}
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}

      <Form onSubmit={handleSave}>
        {/* Account Info */}
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

        {/* Change Password */}
        <h5 className="mt-4">Change Password</h5>
        <Form.Group className="mb-3">
          <TextField
            label="New Password"
            name="newPassword"
            type="password"
            fullWidth
            variant="outlined"
            value={formData.newPassword}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            fullWidth
            variant="outlined"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Save & Cancel Buttons */}
        <div className="button-group">
          <Button type="submit" variant="primary" className="save-btn">
            Save Changes
          </Button>
          <Button variant="secondary" className="cancel-btn">
            Cancel
          </Button>
        </div>
      </Form>

      {/* Deactivate Account Section */}
      <Box className="deactivate-account">
        <h5>Deactivate Account</h5>
        <p>
          If you deactivate your account, you will lose access to all your data.
        </p>
        <Button variant="danger">Deactivate Account</Button>
      </Box>
    </div>
  );
};

export default AccountSettingsPage;

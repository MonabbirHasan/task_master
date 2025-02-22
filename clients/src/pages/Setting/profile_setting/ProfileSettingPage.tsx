import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { TextField, Avatar, Box } from "@mui/material";
import "./profile_setting_page.css";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
const ProfileSettingsPage: React.FC = () => {
  const [profilePic, setProfilePic] = useState<string>();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    bio: "",
  });

  // Handle File Upload
  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
    }
  };

  // Handle Input Change
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-settings-card">
      <h2 className="mb-4">Profile Settings</h2>

      {/* Profile Picture Upload */}
      <Box className="profile-pic-container">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="profile-avatar"
        />
        <Form.Group>
          <Form.Label className="upload-label">
            Change Profile Picture
          </Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Form.Group>
      </Box>

      {/* Profile Form */}
      <Form>
        <Form.Group className="mb-3">
          <TextField
            label="Full Name"
            name="name"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Group>

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
            label="Bio"
            name="bio"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={formData.bio}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Save & Cancel Buttons */}
        <div className="button-group">
          <ButtonComponent
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
            style={{
              textTransform: "capitalize",
              background: "var(--primary-color)",
              color: "var(--text-light)",
              border: "none",
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
            btn_label={"Cancel"}
            variant={undefined}
            size={undefined}
            color={undefined}
            disabled={false}
          />
        </div>
      </Form>
    </div>
  );
};

export default ProfileSettingsPage;

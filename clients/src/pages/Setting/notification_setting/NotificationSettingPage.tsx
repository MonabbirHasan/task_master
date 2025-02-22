import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Box, Switch, FormControlLabel } from "@mui/material";
import "./notification_setting_page.css";
const NotificationSettingsPage: React.FC = () => {
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    pushNotifications: false,
    newMessage: true,
    taskUpdates: false,
    promotionalOffers: true,
  });

  // Handle Toggle Changes
  const handleToggle = (event: any) => {
    setNotifications({
      ...notifications,
      [event.target.name]: event.target.checked,
    });
  };

  // Handle Save Changes
  const handleSave = (e: any) => {
    e.preventDefault();
    console.log("Saved Notifications: ", notifications);
    alert("Notification settings updated successfully!");
  };

  return (
    <div className="notification-settings-card">
      <h2 className="mb-4">Notification Settings</h2>

      <Form onSubmit={handleSave}>
        <Box className="notification-section">
          <h5>Email Notifications</h5>
          <FormControlLabel
            control={
              <Switch
                checked={notifications.emailUpdates}
                onChange={handleToggle}
                name="emailUpdates"
              />
            }
            label="Receive Email Updates"
          />
          <FormControlLabel
            control={
              <Switch
                checked={notifications.newMessage}
                onChange={handleToggle}
                name="newMessage"
              />
            }
            label="New Message Alerts"
          />
        </Box>

        <Box className="notification-section">
          <h5>Push Notifications</h5>
          <FormControlLabel
            control={
              <Switch
                checked={notifications.pushNotifications}
                onChange={handleToggle}
                name="pushNotifications"
              />
            }
            label="Receive Push Notifications"
          />
          <FormControlLabel
            control={
              <Switch
                checked={notifications.taskUpdates}
                onChange={handleToggle}
                name="taskUpdates"
              />
            }
            label="Task Updates & Reminders"
          />
        </Box>

        <Box className="notification-section">
          <h5>Marketing & Promotions</h5>
          <FormControlLabel
            control={
              <Switch
                checked={notifications.promotionalOffers}
                onChange={handleToggle}
                name="promotionalOffers"
              />
            }
            label="Receive Promotional Offers"
          />
        </Box>

        <div className="button-group">
          <Button type="submit" variant="primary" className="save-btn">
            Save Changes
          </Button>
          <Button variant="secondary" className="cancel-btn">
            Cancel
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NotificationSettingsPage;

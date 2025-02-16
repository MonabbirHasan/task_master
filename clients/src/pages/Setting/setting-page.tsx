import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { TextField, Checkbox, FormControlLabel, Select, MenuItem } from "@mui/material";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import "./setting-page.css"; 

const SettingsPage = () => {
  const [profileVisibility, setProfileVisibility] = useState("Public");
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <div className="main-container">
      {/* Header Component */}
      <Header />

      <Container className="settings-container">
        <h1 className="settings-title text-center">Settings</h1>

        <Row className="justify-content-center">
          {/* Account Management Section */}
          <Col md={6}>
            <Card className="settings-card">
              <Card.Body>
                <h2 className="section-title">Account Management</h2>
                <Form>
                  <TextField label="Name" fullWidth margin="normal" />
                  <TextField label="Email" type="email" fullWidth margin="normal" />
                  <TextField label="Password" type="password" fullWidth margin="normal" />
                  <Button variant="primary" className="btn-save" type="submit">
                    Save Changes
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Notification Preferences Section */}
          <Col md={6}>
            <Card className="settings-card">
              <Card.Body>
                <h2 className="section-title">Notification Preferences</h2>
                <Form>
                  <FormControlLabel control={<Checkbox />} label="Email Notifications" />
                  <FormControlLabel control={<Checkbox />} label="Push Notifications" />
                  <FormControlLabel control={<Checkbox />} label="SMS Alerts" />
                  <Button variant="primary" className="btn-save" type="submit">
                    Save Preferences
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Privacy Settings Section */}
          <Col md={6}>
            <Card className="settings-card">
              <Card.Body>
                <h2 className="section-title">Privacy Settings</h2>
                <Form>
                  <Form.Label>Profile Visibility</Form.Label>
                  <Select
                    value={profileVisibility}
                    onChange={(e) => setProfileVisibility(e.target.value)}
                    fullWidth
                  >
                    <MenuItem value="Public">Public</MenuItem>
                    <MenuItem value="Private">Private</MenuItem>
                    <MenuItem value="Only Connections">Only Connections</MenuItem>
                  </Select>
                  <FormControlLabel
                    control={
                      <Checkbox checked={twoFactor} onChange={(e) => setTwoFactor(e.target.checked)} />
                    }
                    label="Enable Two-Factor Authentication"
                  />
                  <Button variant="primary" className="btn-save" type="submit">
                    Update Privacy
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default SettingsPage;

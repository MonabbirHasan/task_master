import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Box, Typography, Select, MenuItem } from "@mui/material";
import "./subscription_setting_page.css";
const SubscriptionSettingsPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  // Handle Plan Change
  const handlePlanChange = (event: any) => {
    setSelectedPlan(event.target.value);
  };

  // Handle Subscription Update
  const handleSubscriptionUpdate = () => {
    alert(`Subscription updated to: ${selectedPlan.toUpperCase()} Plan`);
  };

  return (
    <div className="subscription-card">
      <Typography variant="h4" className="mb-4">
        Subscription Settings
      </Typography>

      <Card className="current-plan">
        <Card.Body>
          <Typography variant="h6">
            Current Plan: <strong>Premium</strong>
          </Typography>
          <Typography variant="body2">
            Renews on: <strong>March 15, 2025</strong>
          </Typography>
          <Typography variant="body2">
            Billing Cycle: <strong>Monthly</strong>
          </Typography>
        </Card.Body>
      </Card>

      <Box className="plan-selection">
        <Typography variant="h6" className="mb-2">
          Change Subscription Plan
        </Typography>
        <Select value={selectedPlan} onChange={handlePlanChange} fullWidth>
          <MenuItem value="basic">Basic - $10/month</MenuItem>
          <MenuItem value="standard">Standard - $20/month</MenuItem>
          <MenuItem value="premium">Premium - $30/month</MenuItem>
        </Select>
      </Box>

      <Box className="billing-info">
        <Typography variant="h6" className="mb-2">
          Billing Information
        </Typography>
        <Typography variant="body2">
          Card: <strong>**** **** **** 1234</strong>
        </Typography>
        <Typography variant="body2">
          Next Payment: <strong>March 15, 2025</strong>
        </Typography>
      </Box>

      <div className="button-group">
        <Button
          variant="primary"
          className="update-btn"
          onClick={handleSubscriptionUpdate}
        >
          Update Plan
        </Button>
        <Button variant="danger" className="cancel-btn">
          Cancel Subscription
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionSettingsPage;

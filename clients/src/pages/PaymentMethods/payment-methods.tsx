import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import Header from '../../components/layouts/Header/Header';
import Footer from "../../components/layouts/Footer/Footer";
import "./payment-methods.css";

const PaymentMethods = () => {
  const [activeTab, setActiveTab] = useState("getPayment");
  const [openPopup, setOpenPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  // Explicit types for the event and newTab
  const handleTabChange = (event: React.SyntheticEvent, newTab: string): void => {
    setActiveTab(newTab);
  };

  // Explicit type for content
  const handlePopupOpen = (content: string): void => {
    setPopupContent(content);
    setOpenPopup(true);
  };

  const handlePopupClose = (): void => {
    setOpenPopup(false);
    setPopupContent("");
  };

  return (
    <div className="main-container">
      {/* Header Component */}
      <Header />
      <Box className="payment-methods-container">
        <h2 className="page-title">Payment Methods</h2>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          className="payment-methods-tabs"
        >
          <Tab value="getPayment" label="Get Payment" />
          <Tab value="receivePayment" label="Receive Payment" />
        </Tabs>

        {activeTab === "getPayment" && (
          <Box className="get-payment-tab">
            <p>
              When you are ready to accept a Tasker's offer, you will be required
              to pay for the task using Task Master Pay. Payment will be held
              securely until the task is complete and you release payment to the
              Tasker.
            </p>

            <Card className="payment-option-card">
              <CardContent>
                <h3>CREDIT CARD</h3>
                <p>Add your credit or debit card</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handlePopupOpen("Add Credit or Debit Card")}
                >
                  Add Card
                </Button>
              </CardContent>
            </Card>

            <Card className="payment-option-card">
              <CardContent>
                <h3>Task Master CREDITS</h3>
                <p>Balance:</p>
                <p>$0</p>
              </CardContent>
            </Card>
          </Box>
        )}

        {activeTab === "receivePayment" && (
          <Box className="receive-payment-tab">
            <p>
              Once a task is completed, you will be able to request payment from
              the Job Poster, who will then release it to your nominated account.
            </p>

            <Card className="payment-option-card">
              <CardContent>
                <h3>Bank Account</h3>
                <p>Add your bank account details to receive payments.</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handlePopupOpen("Add Bank Account")}
                >
                  Add Bank Account
                </Button>
              </CardContent>
            </Card>

            <Card className="payment-option-card">
              <CardContent>
                <h3>PayPal</h3>
                <p>Link your PayPal account to receive payments.</p>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handlePopupOpen("Link PayPal Account")}
                >
                  Link PayPal
                </Button>
              </CardContent>
            </Card>
          </Box>
        )}

        {/* Popup Dialog */}
        <Dialog open={openPopup} onClose={handlePopupClose}>
          <DialogTitle>{popupContent}</DialogTitle>
          <DialogContent>
            <TextField
              label={popupContent}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handlePopupClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={handlePopupClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default PaymentMethods;

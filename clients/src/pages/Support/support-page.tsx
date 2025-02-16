import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Email, Phone, Chat } from "@mui/icons-material";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import "./support-page.css";

const SupportPage = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => setShowChat(!showChat);

  return (
    <div className="main-container">
      {/* Header Component */}
      <Header />

      <div className="support-container">
        {/* Hero Section */}
        <header className="support-header">
          <h1>Support Center</h1>
          <p>If you need help, we're here for you!</p>
        </header>

        <Container className="support-content">
          <Row className="justify-content-center">
            {/* Support Options Section */}
            <Col md={6}>
              <Card className="support-card">
                <Card.Body>
                  <h2 className="section-title">Ways to Get Support</h2>
                  <ul className="support-links">
                    <li>
                      <Email className="support-icon" />{" "}
                      <a href="mailto:support@platform.com">Email Support</a>
                    </li>
                    <li>
                      <Phone className="support-icon" />{" "}
                      <a href="tel:+1234567890">Phone Support</a>
                    </li>
                    <li>
                      <Button
                        variant=""
                        className="chat-button"
                        onClick={toggleChat}
                      >
                        <Chat className="support-icon" /> Live Chat
                      </Button>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Live Chat Window */}
            {showChat && (
              <Col md={6}>
                <Card className="chat-box">
                  <Card.Body>
                    <h3>Live Chat</h3>
                    <div className="chat-window">
                      <p>👋 Hi! How can we assist you today?</p>
                      {/* Future Chatbot/Support Integration Here */}
                    </div>
                    <Button
                      variant="danger"
                      className="close-chat"
                      onClick={toggleChat}
                    >
                      Close Chat
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )}
          </Row>
        </Container>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default SupportPage;

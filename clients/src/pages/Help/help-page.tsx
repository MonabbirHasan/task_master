import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { TextField } from "@mui/material";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import "./help-page.css";

const HelpPage = () => {
  return (
    <div className="main-container">
      {/* Header Component */}
      <Header />

      <div className="help-container">
        {/* Hero Section */}
        <header className="help-header">
          <h1>How can we help you?</h1>
          <p>Find answers to common questions or contact support for further assistance.</p>
        </header>

        <Container className="help-content">
          <Row className="justify-content-center">
            {/* Helpful Resources Section */}
            <Col md={6}>
              <Card className="help-card">
                <Card.Body>
                  <h2 className="section-title">Helpful Resources</h2>
                  <ul className="help-links">
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/terms">Terms and Conditions</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/guides">Guides and Tutorials</a></li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Support Section */}
            <Col md={6}>
              <Card className="help-card">
                <Card.Body>
                  <h2 className="section-title">Contact Support</h2>
                  <p>If you can't find what you're looking for, reach out to us.</p>
                  <Form action="/contact-us" method="POST">
                    <TextField label="Your Name" fullWidth margin="normal" required />
                    <TextField label="Your Email" type="email" fullWidth margin="normal" required />
                    <TextField label="Describe your issue" multiline rows={4} fullWidth margin="normal" required />
                    <Button variant="primary" className="btn-submit" type="submit">
                      Submit
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default HelpPage;

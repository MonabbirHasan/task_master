import { Container, Row, Col, Form } from "react-bootstrap";
import "./Footer.css";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="footer py-5">
      <Container>
        <Row className="text-center text-md-start">
          <Col xs={12} md={4} lg={2} className="footer-section">
            <h4 className="logo-brand">Task-Master</h4>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/advertising">Advertising</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/terms">Terms of Use</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} lg={2} className="footer-section">
            <h4>UAE</h4>
            <ul>
              <li>
                <a href="/dubai">Dubai</a>
              </li>
              <li>
                <a href="/abu-dhabi">Abu Dhabi</a>
              </li>
              <li>
                <a href="/sharjah">Sharjah</a>
              </li>
              <li>
                <a href="/fujairah">Fujairah</a>
              </li>
              <li>
                <a href="/ajman">Ajman</a>
              </li>
              <li>
                <a href="/al-ain">Al Ain</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} lg={2} className="footer-section">
            <h4>Other Countries</h4>
            <ul>
              <li>
                <a href="/egypt">Egypt</a>
              </li>
              <li>
                <a href="/bahrain">Bahrain</a>
              </li>
              <li>
                <a href="/saudi-arabia">Saudi Arabia</a>
              </li>
              <li>
                <a href="/kuwait">Kuwait</a>
              </li>
              <li>
                <a href="/qatar">Qatar</a>
              </li>
              <li>
                <a href="/pakistan">Pakistan</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} lg={2} className="footer-section">
            <h4>Get Social</h4>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="social-icon facebook" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="social-icon twitter" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTube className="social-icon youtube" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="social-icon instagram" />
              </a>
            </div>
          </Col>

          <Col xs={12} md={4} lg={2} className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="/help">Help</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/call-us">Call Us</a>
              </li>
            </ul>
          </Col>

          <Col xs={12} md={4} lg={2} className="footer-section">
            <h4>Languages</h4>
            <ul>
              <li>
                <a href="/ar">العربية</a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="footer-line" />
        <div className="text-center text-light">
          &copy; {new Date().getFullYear()} Task-Master. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./how_it_work.css"; // Import the CSS file
import { Col, Row } from "react-bootstrap";

const HowItWorks: React.FC = () => {
  return (
    <div className="pset how-it-work">
      <h1>How It Works</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="mb-4">
          <div className="how-it-work_item">
            <div className="outer-circle">
              <h1>01</h1>
            </div>
            <h2>Find Local Experts</h2>
            <p>
              Publish your tasks or job listings to attract skilled
              professionals and get them done efficiently.
            </p>
          </div>
        </Col>

        <Col xs={12} md={4} className="mb-4">
          <div className="how-it-work_item">
            <div className="outer-circle">
              <h1>02</h1>
            </div>
            <h2>Get Things Done</h2>
            <p>
              Experience smooth task completion with professionals, while
              gaining trust and reputation through reviews.
            </p>
          </div>
        </Col>

        <Col xs={12} md={4} className="mb-4">
          <div className="how-it-work_item">
            <div className="outer-circle">
              <h1>03</h1>
            </div>
            <h2>Post Jobs</h2>
            <p>
              Connect with local experts, receive customized quotes, and choose
              the best fit for your task.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HowItWorks;

import React from "react";
import "./featured_listing.css";
import { Col, Row } from "react-bootstrap";
import ButtonComponent from "../Buttons/ButtonComponent";
const FeaturedListing = () => {
  return (
    <section className="featured-tasks-section">
      <div>
        <h2 className="section-title">Featured Tasks & Services</h2>

        <div className="featured-">
          <Row lg={4}>
            <Col>
              <div className="task-card">
                <img
                  src="https://cifar.ca/wp-content/uploads/2023/10/MarlosMachado23Profile-400x250.png"
                  alt="Task Image"
                  className="task-image"
                />
                <div className="task-info">
                  <h3 className="task-title">Logo for My Business</h3>
                  <p className="task-description">
                    Create a modern and memorable logo for a new startup.
                  </p>
                  <div className="task-footer">
                    <span className="provider-name">John Doe</span>
                    <ButtonComponent
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      style={{
                        textTransform: "capitalize",
                        background: "var(--primary-color)",
                        color: "var(--text-light)",
                      }}
                      btn_label={"Hire Now"}
                      variant={undefined}
                      size={undefined}
                      color={undefined}
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="task-card">
                <img
                  src="https://ircai.org/wp-content/uploads/2025/02/Mitja-Jermol-photo-400x250.jpeg"
                  alt="Task Image"
                  className="task-image"
                />
                <div className="task-info">
                  <h3 className="task-title">Website Development</h3>
                  <p className="task-description">
                    Build a responsive and SEO-friendly website for my business
                    or company.
                  </p>
                  <div className="task-footer">
                    <span className="provider-name">Jane Smith</span>
                    <ButtonComponent
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      style={{
                        textTransform: "capitalize",
                        background: "var(--primary-color)",
                        color: "var(--text-light)",
                      }}
                      btn_label={"Hire Now"}
                      variant={undefined}
                      size={undefined}
                      color={undefined}
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="task-card">
                <img
                  src="https://cifar.ca/wp-content/uploads/2023/10/JeffClune23Profile-400x250.png"
                  alt="Task Image"
                  className="task-image"
                />
                <div className="task-info">
                  <h3 className="task-title">Social Media Management</h3>
                  <p className="task-description">
                    Manage my social media accounts and grow my brand presence.
                  </p>
                  <div className="task-footer">
                    <span className="provider-name">Sarah Lee</span>
                    <ButtonComponent
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      style={{
                        textTransform: "capitalize",
                        background: "var(--primary-color)",
                        color: "var(--text-light)",
                      }}
                      btn_label={"Hire Now"}
                      variant={undefined}
                      size={undefined}
                      color={undefined}
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="task-card">
                <img
                  src="https://cifar.ca/wp-content/uploads/2023/10/JeffClune23Profile-400x250.png"
                  alt="Task Image"
                  className="task-image"
                />
                <div className="task-info">
                  <h3 className="task-title">Social Media Management</h3>
                  <p className="task-description">
                    Manage my social media accounts and grow my brand presence.
                  </p>
                  <div className="task-footer">
                    <span className="provider-name">Sarah Lee</span>
                    <ButtonComponent
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      style={{
                        textTransform: "capitalize",
                        background: "var(--primary-color)",
                        color: "var(--text-light)",
                      }}
                      btn_label={"Hire Now"}
                      variant={undefined}
                      size={undefined}
                      color={undefined}
                      disabled={false}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListing;

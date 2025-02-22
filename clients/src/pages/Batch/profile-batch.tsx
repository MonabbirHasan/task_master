import React, { useState } from "react";
import "./profile-batch.css";
import { Col, Container, Row } from "react-bootstrap";
import { LinearProgress } from "@mui/material";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import { useNavigate } from "react-router-dom";

const BatchStatsPage = () => {
  const navigate = useNavigate();
  const [earnings, setEarnings] = useState(1770); // Example earnings
  const silverGoal = 2650;
  const progressWidth = Math.min((earnings / silverGoal) * 100, 100);
  const remainingAmount = silverGoal - earnings;
  const tier = earnings >= silverGoal ? "Silver" : "Bronze";
  return (
    <div className="dashboard">
      <Container>
        <div className="profile_badge_wrapper">
          <section className="profile_badges">
            <Row>
              <Col>
                <div className="profile_badge_card">
                  <img
                    src="https://www.alchemistzen.com/wp-content/uploads/2023/04/download__2_-removebg-preview.png"
                    alt=""
                  />
                  <div className="tier-info">
                    <h2>Your Current Tier</h2>
                    <div className="tier">Bronze Tasker Tier</div>
                    {/* <div className="tier-label">Bronze</div> */}
                    <div className="service-fee">20% service fee excl. GST</div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="profile_badge_card">
                  <img
                    src="https://www.sicklecelldisease.org/wp-content/uploads/2019/01/Silver-Membership.png"
                    alt=""
                  />
                  <div className="tier-info">
                    <h2>Your Next Tier</h2>
                    <div className="tier">Silver Tasker Tier</div>
                    <div className="service-fee">
                      18.5% service fee excl. GST
                    </div>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="profile_badge_card">
                  <img src="/image/gold_badge.png" alt="" />
                  <div className="tier-info">
                    <h2>Your Next Tier</h2>
                    <p className="tier">Gold Tasker Tier</p>
                    <p className="service-fee">18.5% service fee excl. GST</p>
                  </div>
                </div>
              </Col>
            </Row>
          </section>

          {/* profile badge roadmap */}
          <section className="profile_badge_roadmap">
            <div className="earnings-section">
              <h2>Your Earnings (Last 30 Days)</h2>
              {/* 
              <div className="tier-status">
                <span className={`tier-badge ${tier.toLowerCase()}`}>
                  {tier} Tier
                </span>
              </div> */}

              <p>
                {remainingAmount > 0
                  ? `You're $${remainingAmount} away from Silver and lower service fees.`
                  : "Congratulations! You've reached Silver Tier! 🎉"}
              </p>

              <div className="progress-bar">
                <LinearProgress
                  style={{ height: 10, background: "var(--gray-light)" }}
                  value={progressWidth}
                  variant="determinate"
                />
              </div>

              <div className="earnings-labels">
                <span>$0</span>
                <span>$880</span>
                <span>$2,650</span>
                <span>$5,300+</span>
              </div>

              <div className="tier-benefits">
                <p>🌟 Reach Silver Tier and enjoy:</p>
                <ul>
                  <li>✅ Lower service fee (18.5%)</li>
                  <li>✅ Priority task recommendations</li>
                  <li>✅ Exclusive task insights</li>
                </ul>
              </div>

              <p className="time-based-goal">
                Earn ${remainingAmount > 0 ? remainingAmount : 0} before{" "}
                <strong>March 31st</strong> to level up!
              </p>

              <ButtonComponent
                onClick={function (): void {
                  navigate("/browse-tasks");
                }}
                style={{
                  textTransform: "capitalize",
                  background: "var(--secondary-color)",
                  color: "var(--text-light)",
                  border: "none",
                }}
                btn_label={"Find More Tasks"}
                variant={undefined}
                size={undefined}
                color={undefined}
                disabled={false}
              />
            </div>
          </section>
          <div className="info-section">
            <a href="#" className="info-link">
              How do tiers work?
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BatchStatsPage;

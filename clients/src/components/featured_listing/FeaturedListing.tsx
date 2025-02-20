import React from "react";
import "./featured_listing.css";
const FeaturedListing = () => {
  return (
    <section className="featured-tasks-section">
      <div className="container">
        <h2 className="section-title">Featured Tasks & Services</h2>

        <div className="featured-tasks-grid">
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
                <button className="cta-button">Hire Now</button>
              </div>
            </div>
          </div>
          <div className="task-card">
            <img
              src="https://ircai.org/wp-content/uploads/2025/02/Mitja-Jermol-photo-400x250.jpeg"
              alt="Task Image"
              className="task-image"
            />
            <div className="task-info">
              <h3 className="task-title">Website Development</h3>
              <p className="task-description">
                Build a responsive and SEO-friendly website for my business or
                company.
              </p>
              <div className="task-footer">
                <span className="provider-name">Jane Smith</span>
                <button className="cta-button">Hire Now</button>
              </div>
            </div>
          </div>
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
                <button className="cta-button">Hire Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListing;

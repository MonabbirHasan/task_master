import React from "react";
import Header from '../../components/layouts/Header/Header';
import Footer from "../../components/layouts/Footer/Footer";
import "./task-details.css";

const TaskDetails = () => {
  return (
    <div className="main-container">
    {/* Header Component */}
    <Header />
    <div className="task-details-container">
      {/* Header Section */}
      <header className="task-header">
        <h1>Professional Videography for Any Events</h1>
        <div className="task-meta">
          <span className="category">Photography</span>
          <span className="rating">⭐ 4.5 (2 Reviews)</span>
        </div>
      </header>

      {/* Task Details Section */}
      <div className="task-content">
        {/* Left Section */}
        <div className="task-image-and-info">
          <img
            src="/path-to-camera-image.jpg"
            alt="Task Image"
            className="task-image"
          />
          <p className="task-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque tempor nisl eget lacinia gravida. Suspendisse interdum
            lectus elit, ut porttitor odio dignissim vitae.
          </p>
          <div className="task-tags">
            <span className="tag">Events</span>
            <span className="tag">Photography</span>
            <span className="tag">Videography</span>
          </div>
        </div>

        {/* Right Section */}
        <aside className="task-sidebar">
          <div className="tasker-card">
            <img
              src="/path-to-tasker-image.jpg"
              alt="Frank Chapman"
              className="tasker-image"
            />
            <h3>Frank Chapman</h3>
            <p>⭐ 4.0 (10 Reviews)</p>
            <p>Experience: 2 - 5 Years</p>
            <button className="message-btn">Message Tasker</button>
          </div>
          <div className="task-price">
            <span>$29/hr</span>
          </div>
        </aside>
      </div>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>Reviews</h2>
        <div className="review-card">
          <img
            src="/path-to-reviewer-image.jpg"
            alt="Maggie Wallace"
            className="reviewer-image"
          />
          <div className="review-content">
            <h3>Maggie Wallace</h3>
            <p>Date: 03/12/2021</p>
            <p>
              Aliquam dignissim dolor erat nunc condimentum pulvinar nisl, non
              venenatis leo fringilla at.
            </p>
          </div>
        </div>
      </section>

      {/* Related Tasks Section */}
      <section className="related-tasks">
        <h2>Related Tasks</h2>
        <div className="related-grid">
          <div className="related-task-card">
            <img src="/path-to-related-task.jpg" alt="Task Image" />
            <h3>Photography for Weddings</h3>
            <span>$40/hr</span>
          </div>
          <div className="related-task-card">
            <img src="/path-to-related-task.jpg" alt="Task Image" />
            <h3>Event Videography</h3>
            <span>$35/hr</span>
          </div>
        </div>
      </section>
    </div>
     {/* Footer Component */}
     <Footer />
     </div>
  );
};

export default TaskDetails;

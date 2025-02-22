import React from "react";
import { Work, Star, Person } from "@mui/icons-material"; // MUI Icons
import "./profile_experience.css";
const ProfileExperience = () => {
  return (
    <div className="profile-experience">
      {/* Experience Details */}
      <div className="experience-details">
        <div className="experience-item">
          <Work className="icon" />
          <div className="text">
            <h3>Years of Experience</h3>
            <p>5+ Years</p>
          </div>
        </div>

        <div className="experience-item">
          <Star className="icon" />
          <div className="text">
            <h3>Client Rating</h3>
            <p>4.9 ⭐ (200+ Reviews)</p>
          </div>
        </div>

        <div className="experience-item">
          <Work className="icon" />
          <div className="text">
            <h3>Completed Projects</h3>
            <p>150+ Successfully Delivered</p>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="bio">
        <h3>About Me</h3>
        <p>
          I am a passionate Full-Stack Developer with expertise in React.js,
          Node.js, and Laravel. I specialize in building high-performance web
          applications and modern UI/UX solutions.
        </p>
      </div>
    </div>
  );
};

export default ProfileExperience;

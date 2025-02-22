import React, { JSX } from "react";
import "./profile_analytic_card.css";
interface ProfileCardProps {
  title: string;
  value: string | number;
}

const ProfileAnalyticCard: React.FC<ProfileCardProps> = ({ title, value }) => {
  return (
    <div className="profile-card">
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  );
};

export default ProfileAnalyticCard;

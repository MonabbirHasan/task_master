import React from "react";
import { Launch, Edit, Delete } from "@mui/icons-material";
import "./portfolio_card.css";
import { IconButton } from "@mui/material";
interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  onDelete: () => void;
  onEdit: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  image,
  link,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title} className="portfolio-image" />
      <div className="portfolio-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="portfolio-actions">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Launch className="icon" />
          </a>
          <IconButton onClick={onEdit}>
            <Edit className="icon" />
          </IconButton>
          <IconButton>
            <Delete className="icon delete-icon" onClick={onDelete} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

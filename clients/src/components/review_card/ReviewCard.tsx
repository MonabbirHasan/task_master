import React from "react";
import { Card } from "react-bootstrap";
import { Avatar, Rating } from "@mui/material";
import "./review_card.css";
interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  date: string;
  avatarUrl?: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  rating,
  review,
  date,
  avatarUrl,
}) => {
  return (
    <Card className="review-card shadow-sm">
      <Card.Body>
        <div className="review-header d-flex align-items-center">
          <Avatar src={avatarUrl} alt={name} className="review-avatar" />
          <div className="review-info">
            <h5 className="review-name">{name}</h5>
            <Rating
              value={rating}
              precision={0.5}
              readOnly
              className="review-rating"
            />
          </div>
        </div>
        <Card.Text className="review-text">{review}</Card.Text>
        <small className="review-date">{date}</small>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;

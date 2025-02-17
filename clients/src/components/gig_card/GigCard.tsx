import React from "react";
import { Card, Button, Col, Row, Badge } from "react-bootstrap";
import { Typography } from "@mui/material";

const GigCard = ({
  title,
  category,
  hourlyRate,
  availability,
  warranty,
  tags,
  description,
  image,
  skills,
  clientReviews,
  estimatedCompletionTime,
  location,
  priceRange,
  deliveryMethod,
  extraServices,
  onClick,
}: {
  title: string;
  category: string;
  hourlyRate: string;
  availability: string;
  warranty: string;
  tags: string;
  description: string;
  image: string;
  skills: string;
  clientReviews: Array<{ user: string; rating: number; comment: string }>;
  estimatedCompletionTime: string;
  location: string;
  priceRange: string;
  deliveryMethod: string;
  extraServices: string[];
  onClick: () => void;
}) => {
  return (
    <div>
      <div className="scard_header">
        <img src="" alt="" />
      </div>
      <div className="scard_body"></div>
      <div className="scard_footer"></div>
    </div>
  );
};

export default GigCard;

import React from "react";
import { Card, Col, Row, Badge } from "react-bootstrap";
import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import "./gig_card.css";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
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
    <div className="scard">
      <div className="scard_header">
        <img
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/255914160/original/5173d1c62ec4c5f08fb57fc3c4a71c7e6780998b/design-great-website-header-slider-or-banner.png"
          alt=""
        />
      </div>
      <div className="scard_body">
        <Stack
          className="gig_author"
          direction="row"
          paddingTop={1}
          paddingLeft={1}
          spacing={1}
          alignItems="center"
        >
          <Avatar src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/255914160/original/5173d1c62ec4c5f08fb57fc3c4a71c7e6780998b/design-great-website-header-slider-or-banner.png" />
          <div>
            <span className="text-capitalize">jhone doe</span>
            <p className="p-0 m-0">developer</p>
          </div>
        </Stack>

        <h3 className="scard_body_title">{title}</h3>

        <Divider />
        <div className="scard_content">
          <Stack pb={1} direction="row" justifyContent="space-between">
            <div className="scard_content_skill">
              <p className="m-0">hourly rate</p>
              <p className="m-0">$23</p>
            </div>
            <div className="scard_content_skill">
              <p className="m-0">Availability</p>
              <p className="m-0">online</p>
            </div>
          </Stack>
          <Divider />
          <Stack direction="row" justifyContent="space-between">
            <div className="scard_content_skill">
              <p className="m-0">skills</p>
              <p className="m-0">cleaner</p>
            </div>
            <div className="scard_content_skill">
              <p className="m-0">work</p>
              <p className="m-0">home cleaning</p>
            </div>
          </Stack>
          <Divider />
        </div>
      </div>
      <div className="scard_footer">
        <Stack px={1} direction="row" justifyContent="space-between">
          <IconButton>
            <FavoriteBorder htmlColor="orangered" fontSize="small" />
          </IconButton>
          <div>
            <Button size="small" className="gig_action_btn">
              make offer
            </Button>
            <Button size="small" className="gig_action_btn">
              view service
            </Button>
          </div>
        </Stack>
      </div>
    </div>
  );
};

export default GigCard;

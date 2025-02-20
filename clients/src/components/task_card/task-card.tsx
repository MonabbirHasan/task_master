import React, { useState } from "react";
import {
  Badge,
  Avatar,
  Chip,
  IconButton,
  Stack,
  Typography,
  Box,
  MenuItem,
  Menu,
} from "@mui/material";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  AccessTime,
  BadgeOutlined,
  CalendarMonth,
  Favorite,
  FavoriteBorder,
  ImportContacts,
  LocationOn,
  LowPriority,
  Message,
  MoreVert,
  PriorityHigh,
  Star,
  StarBorder,
  StarHalf,
  Verified,
  Work,
} from "@mui/icons-material";
import TaskDetails from "../task_details/task-details";
import "./task-card.css";
type TaskCardProps = {
  title: string;
  price: string;
  location: string;
  flexible: string;
  date: string;
  requested: number;
  status: string;
  isFavorit: boolean;
  card_type: string;
  favorit_btn: () => void;
  message_btn: () => void;
};

const TaskCard: React.FC<TaskCardProps> = ({
  title,
  price,
  location,
  flexible,
  date,
  requested,
  status,
  isFavorit,
  card_type,
  favorit_btn,
  message_btn,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // SVG ICON
  const CalendarIcon: React.FC = () => (
    <svg fill="#9BA0BC" height="20" width="20" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12.725 17.275c.483.483 1.075.725 1.775.725s1.292-.242 1.775-.725c.483-.483.725-1.075.725-1.775s-.242-1.292-.725-1.775C15.792 13.242 15.2 13 14.5 13s-1.292.242-1.775.725C12.242 14.208 12 14.8 12 15.5s.242 1.292.725 1.775Zm-9.138 4.138A1.93 1.93 0 0 0 5 22h14a1.93 1.93 0 0 0 1.413-.587A1.93 1.93 0 0 0 21 20V6c0-.55-.196-1.02-.587-1.412A1.927 1.927 0 0 0 19 4h-1V2h-2v2H8V2H6v2H5c-.55 0-1.021.196-1.413.588A1.925 1.925 0 0 0 3 6v14c0 .55.196 1.021.587 1.413ZM19 20H5V10h14v10Zm0-12H5V6h14v2Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
  const ClockIcon: React.FC = () => (
    <svg fill="#9BA0BC" height="20" width="20" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="m16.7 15.3-1.4 1.4-4.3-4.3V7h2v4.6l3.7 3.7Zm-8.6 5.912A9.733 9.733 0 0 0 12 22a9.733 9.733 0 0 0 3.9-.788 10.092 10.092 0 0 0 3.175-2.137c.9-.9 1.612-1.958 2.137-3.175A9.733 9.733 0 0 0 22 12a9.733 9.733 0 0 0-.788-3.9 10.092 10.092 0 0 0-2.137-3.175c-.9-.9-1.958-1.613-3.175-2.138A9.743 9.743 0 0 0 12 2a9.743 9.743 0 0 0-3.9.787 10.105 10.105 0 0 0-3.175 2.138c-.9.9-1.612 1.958-2.137 3.175A9.732 9.732 0 0 0 2 12a9.74 9.74 0 0 0 .788 3.9 10.091 10.091 0 0 0 2.137 3.175c.9.9 1.958 1.612 3.175 2.137Zm9.563-3.549C16.104 19.221 14.217 20 12 20s-4.104-.779-5.662-2.337C4.779 16.104 4 14.217 4 12s.78-4.104 2.338-5.663C7.896 4.779 9.783 4 12 4s4.104.779 5.663 2.337C19.221 7.896 20 9.783 20 12s-.779 4.104-2.337 5.663Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
  const LocationIcon: React.FC = () => {
    return (
      <svg fill="#9BA0BC" height="20" width="20" viewBox="0 0 24 24">
        <path d="M2 20v-3h2V6c0-.55.196-1.02.588-1.412A1.923 1.923 0 0 1 6 4h15v2H6v11h6v3H2Zm13 0a.965.965 0 0 1-.712-.288A.965.965 0 0 1 14 19V9c0-.283.096-.521.288-.713A.967.967 0 0 1 15 8h6a.97.97 0 0 1 .712.287c.192.192.288.43.288.713v10c0 .283-.096.52-.288.712A.965.965 0 0 1 21 20h-6Zm1-3h4v-7h-4v7Z"></path>
      </svg>
    );
  };
  const WarrantyIcon: React.FC = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width="20"
        height="20"
      >
        <path
          d="M32,2 L6,14 V30 C6,45 18,56 32,62 C46,56 58,45 58,30 V14 Z"
          fill="#9BA0BC"
          stroke="#888"
          stroke-width="2"
        />
        <path
          d="M22,34 L30,42 L44,26"
          fill="none"
          stroke="#fff"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  };

  return (
    <article
      className="task_card"
      // onClick={() => {
      //   alert(title);
      // }}
    >
      {/* <div className="favorit_card"></div>
      <div className="my_task_card"></div>
      <div className="tasks_card"></div> */}
      {/* CARD TIMER */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem style={{ fontSize: 12 }} onClick={handleClose}>
          Undo Favorite{" "}
        </MenuItem>
        <MenuItem style={{ fontSize: 12 }} onClick={handleClose}>
          View Task
        </MenuItem>
      </Menu>
      <div className="task_card_timer pt-2">
        <Typography variant="body2">40 Minutes Ago, uploaded</Typography>
        {card_type == "favorit" ? (
          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVert fontSize="small" />
          </IconButton>
        ) : card_type == "my_task" ? (
          <IconButton
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVert fontSize="small" />
          </IconButton>
        ) : (
          <Typography></Typography>
        )}
        {/* {card_type == "my_task" && (
          <IconButton>
            <MoreVert fontSize="small" />
          </IconButton>
        )} */}
      </div>

      {/* CARD HEADER */}
      <div className="task_card_header">
        <div className="task_card_header-title">
          <Typography variant="h6">{title}</Typography>
        </div>
        {/* CARD AUTHOR  */}
        <div className="task_card_header-author">
          <div className="task_card_header-author-badge">
            <Box sx={{ position: "relative", display: "inline-block" }}>
              <Avatar
                src="https://cdn2.psychologytoday.com/assets/styles/manual_crop_16_9_1200x675/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=07tF_dnG"
                sx={{ width: 50, height: 50 }}
              />
              <Verified
                htmlColor="var(--primary-color)"
                fontSize="small"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "2px",
                }}
              />
            </Box>
          </div>
          <div className="task_card_header-author-rating">
            <Star fontSize="small" htmlColor="orange" />
            <Typography variant="subtitle1">(4.5)</Typography>
          </div>
        </div>
      </div>

      {/* CARD BODY */}
      <div className="task_card_body">
        <Stack direction="row" spacing={1}>
          <span>
            <LocationIcon />
          </span>
          <span>{location}</span>
        </Stack>
        <Stack direction="row" spacing={1}>
          <span>
            <LowPriority fontSize="small" htmlColor="gray"/>
          </span>
          <span>Priority - High</span>
        </Stack>
        <Stack direction="row" spacing={1} py={1}>
          <span>
            <CalendarIcon />
          </span>
          <span>{flexible ? "Flexible Time" : ""} </span>
        </Stack>
        <Stack direction="row" spacing={1}>
          <span>
            <ClockIcon />
          </span>
          <span>{date}</span>
        </Stack>
      </div>

      {/* CARD FOOTER */}
      <div className="task_card_footer">
        <div className="task_card_footer-budget">
          <span>budget</span>
          <span>-</span>
          <span>{price}</span>
        </div>

        <span className="task_card_footer-offer">
          <span>proposal</span>
          <span>-</span>
          <span>{requested} to 30</span>
        </span>
        <span className="task_card_footer_status">
          <Chip
            size="small"
            className="task_status_badge"
            style={{
              color: "var(--text-light)",
              background:
                status == "open"
                  ? "var(--primary-color)"
                  : status == "assigned"
                  ? "var(--secondary-color)"
                  : status == "completed"
                  ? "var(--success-color)"
                  : "var(--error-color)",
            }}
            label={status}
          />
        </span>
        <div className="task_card_footer-action">
          <IconButton
            onClick={message_btn}
            aria-label="Send Message"
            role="button"
            size="medium"
          >
            <Message htmlColor="var(--primary-color)" />
          </IconButton>
          <IconButton
            onClick={favorit_btn}
            aria-label="Add to Favorites"
            role="button"
            size="medium"
          >
            {isFavorit ? (
              <Favorite htmlColor="orangered" />
            ) : (
              <FavoriteBorder htmlColor="orangered" />
            )}
          </IconButton>
        </div>
      </div>
    </article>
  );
};
export default TaskCard;

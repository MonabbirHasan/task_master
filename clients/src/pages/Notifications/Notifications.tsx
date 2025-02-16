import React, { useState } from "react";
import { Box, Typography, List, ListItem, ListItemText, Avatar } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";

import "./Notifications.css";

// Define the type for a notification
interface Notification {
  icon?: string; // Optional icon property
  title: string;
  message: string;
}

const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]); // Use the Notification type

  return (
    <div className="main-container">
      {/* Header Component */}
      <Header />
      <Box className="notifications-container">
        <h2 className="page-title">Notifications</h2>

        {/* Empty State */}
        {notifications.length === 0 ? (
          <Box className="empty-notifications">
            <NotificationsActiveIcon className="empty-icon" />
            <Typography variant="h6" className="empty-text">
              You haven't got any notifications yet - assign a task or get a task.
            </Typography>
            {/* Browse Task Button */}
            <button className="btn-small">Browse Task</button>
          </Box>
        ) : (
          /* Notification List */
          <List className="notification-list">
            {notifications.map((notification, index) => (
              <ListItem key={index} className="notification-item">
                <Avatar className="notification-avatar">
                  {notification.icon || notification.title[0]}
                </Avatar>
                <ListItemText
                  primary={notification.title}
                  secondary={notification.message}
                  className="notification-text"
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Notifications;

import React, { useState } from "react";
import { Tab, Nav, Row, Col, Container, Card } from "react-bootstrap";
import {
  NotificationsActive,
  Assignment,
  Chat,
  MonetizationOn,
  RateReview,
  Campaign,
  Security,
} from "@mui/icons-material";
import Layout from "../../components/layouts/Layout";
import PageTitle from "../../components/page_title/PageTitle";
import { Button, IconButton, Typography } from "@mui/material";
import "./notification_page.css";
// Dummy Notification Data
const notifications = [
  {
    id: 1,
    category: "all",
    title: "Welcome!",
    message: "Thanks for joining us!",
    time: "2 hours ago",
  },
  {
    id: 2,
    category: "task",
    title: "New Task Assigned",
    message: "You have a new task to complete.",
    time: "30 mins ago",
  },
  {
    id: 3,
    category: "message",
    title: "New Message",
    message: "You received a new message from John.",
    time: "1 hour ago",
  },
  {
    id: 4,
    category: "payment",
    title: "Payment Received",
    message: "Your payment of $200 has been received.",
    time: "2 days ago",
  },
  {
    id: 5,
    category: "reviews",
    title: "New Review",
    message: "You got a 5-star review!",
    time: "3 hours ago",
  },
  {
    id: 6,
    category: "announcements",
    title: "System Maintenance",
    message: "Scheduled maintenance at midnight.",
    time: "1 day ago",
  },
  {
    id: 7,
    category: "security",
    title: "Password Changed",
    message: "Your password was successfully updated.",
    time: "4 hours ago",
  },
];

const NotificationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  // Filter notifications based on the selected tab
  const filteredNotifications =
    activeTab === "all"
      ? notifications
      : notifications.filter((n) => n.category === activeTab);

  return (
    <div>
      <Layout>
        <div className="notification-page">
          <Container>
            <PageTitle title="Notifications" />
            <Row>
              {/* Sidebar Tabs */}
              <Col md={3}>
                <div className="notification_tabs">
                  <Nav
                    variant="pills"
                    className="flex-column notification_tabs_menu"
                  >
                    {[
                      {
                        eventKey: "all",
                        label: "All",
                        icon: <NotificationsActive fontSize="small" />,
                      },
                      {
                        eventKey: "task",
                        label: "Task Updates",
                        icon: <Assignment fontSize="small" />,
                      },
                      {
                        eventKey: "message",
                        label: "Messages",
                        icon: <Chat fontSize="small" />,
                      },
                      {
                        eventKey: "payment",
                        label: "Payments",
                        icon: <MonetizationOn fontSize="small" />,
                      },
                      {
                        eventKey: "reviews",
                        label: "Reviews",
                        icon: <RateReview fontSize="small" />,
                      },
                      {
                        eventKey: "announcements",
                        label: "Announcements",
                        icon: <Campaign fontSize="small" />,
                      },
                      {
                        eventKey: "security",
                        label: "Security",
                        icon: <Security fontSize="small" />,
                      },
                    ].map((tab) => (
                      <Nav.Item key={tab.eventKey}>
                        <Nav.Link
                          eventKey={tab.eventKey}
                          active={activeTab === tab.eventKey}
                          onClick={() => setActiveTab(tab.eventKey)}
                          className="d-flex align-items-center text-uppercase fw-bold py-2"
                          style={{
                            color:
                              activeTab === tab.eventKey ? "#0d6efd" : "#333",
                            backgroundColor:
                              activeTab === tab.eventKey
                                ? "#e9ecef"
                                : "transparent",
                            borderRadius: "5px",
                          }}
                        >
                          {tab.icon}
                          <span className="ms-2">{tab.label}</span>
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>
              </Col>

              {/* Content Area */}
              <Col md={9}>
                <Tab.Content>
                  <Tab.Pane eventKey={activeTab} active>
                    <PageTitle
                      title=""
                      subtitle={
                        activeTab === "all"
                          ? "All Notifications"
                          : `${activeTab} Notifications`
                      }
                    />
                    {filteredNotifications.length > 0 ? (
                      filteredNotifications.slice(0, 3).map((notification) => (
                        <div
                          key={notification.id}
                          className="notification_card_item"
                        >
                          <Typography className="notification_card_title">
                            {notification.title}
                          </Typography>
                          <div>
                            <p>
                              {notification.message}
                              {/* <button
                                style={{
                                  border: 0,
                                  borderRadius: 10,
                                  fontSize: 13,
                                  textTransform: "capitalize",
                                }}
                              >
                                more
                              </button> */}
                            </p>
                          </div>
                          <small className="text-muted">
                            {notification.time}
                          </small>
                        </div>
                      ))
                    ) : (
                      <p>No notifications available.</p>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </div>
  );
};

export default NotificationPage;

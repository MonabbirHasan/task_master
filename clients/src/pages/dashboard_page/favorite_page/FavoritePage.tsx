import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
  Grid,
  Chip,
} from "@mui/material";
import { Bookmark, LocationOn, CalendarToday } from "@mui/icons-material";
import "./favorite_page.css";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import TaskCard from "../../../components/task_card/task-card";
import TaskFilter from "../../../components/data_filter/TaskFilter";
import TaskDetails from "../../../components/task_details/task-details";
import PageTitle from "../../../components/page_title/PageTitle";

const taskData = [
  {
    title: "Web Development Task and my own website maintained",
    price: "$500",
    location: "New York, NY",
    flexible: "Yes",
    status: "open",
    date: "2025-02-12",
    requested: 3,
    author_img: true,
    author: "john_doe",
    author_name: "John Doe",
  },
  {
    title: "Mobile App Design",
    price: "$700",
    location: "San Francisco, CA",
    flexible: "No",
    date: "2025-02-11",
    requested: 5,
    status: "assigned",
    author_img: true,
    author: "jane_smith",
    author_name: "Jane Smith",
  },
  {
    title: "SEO Optimization",
    price: "$300",
    location: "Los Angeles, CA",
    flexible: "Yes",
    date: "2025-02-10",
    requested: 2,
    status: "completed",
    author_img: false,
    author: "alex_lee",
    author_name: "Alex Lee",
  },
  {
    title: "Social Media Management",
    price: "$400",
    location: "Miami, FL",
    flexible: "Yes",
    date: "2025-02-09",
    requested: 4,
    status: "open",
    author_img: true,
    author: "maria_garcia",
    author_name: "Maria Garcia",
  },
  {
    title: "Graphic Design",
    price: "$250",
    location: "Austin, TX",
    flexible: "No",
    date: "2025-02-08",
    requested: 1,
    status: "error",
    author_img: true,
    author: "luke_brown",
    author_name: "Luke Brown",
  },
  {
    title: "Content Writing",
    price: "$150",
    location: "Seattle, WA",
    flexible: "Yes",
    date: "2025-02-07",
    requested: 2,
    status: "assigned",
    author_img: true,
    author: "emily_clark",
    author_name: "Emily Clark",
  },
  {
    title: "Logo Design",
    price: "$350",
    location: "Chicago, IL",
    flexible: "No",
    date: "2025-02-06",
    requested: 6,
    status: "completed",
    author_img: false,
    author: "david_wilson",
    author_name: "David Wilson",
  },
  {
    title: "Data Entry",
    price: "$200",
    location: "Boston, MA",
    flexible: "Yes",
    date: "2025-02-05",
    requested: 7,
    status: "open",
    author_img: false,
    author: "susan_taylor",
    author_name: "Susan Taylor",
  },
];
const FavoritePage: React.FC = () => {
  const [filteredTasks, setFilteredTasks] = useState(taskData);
  return (
    <div className="favorite_page">
      <Container fluid>
        <Box mx="auto" p={3}>
          <PageTitle title="my favorites tasks" />
          {taskData.length === 0 ? (
            <Typography color="textSecondary" align="center">
              No favorites added yet.
            </Typography>
          ) : (
            <Row lg={4}></Row>
          )}
          {/* Task List */}

          <Row>
            <Col xs={12} md={5} lg={4}>
              <TaskFilter data={taskData} results={setFilteredTasks} />
            </Col>
            <Col xs={12} md={7} lg={8}>
              {filteredTasks.map((items, index) => (
                <TaskCard
                  key={index}
                  title={items.title}
                  price={items.price}
                  location={items.location}
                  flexible={items.flexible}
                  date={items.date}
                  requested={items.requested}
                  isFavorit={true}
                  card_type="favorit"
                  status={items.status}
                  favorit_btn={() => {
                    alert("favorit");
                  } }
                  message_btn={() => {
                    alert("message");
                  } } onClick={function (): void {
                    throw new Error("Function not implemented.");
                  } }                />
              ))}
            </Col>
          </Row>
        </Box>
      </Container>
    </div>
  );
};

export default FavoritePage;

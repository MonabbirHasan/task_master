import React, { useState } from "react";
import TaskFilter from "../../components/data_filter/TaskFilter";
import TaskCard from "../../components/task_card/task-card";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./browse_task_page.css";
import { FormControl } from "@mui/material";

const taskData = [
  {
    title:
      "Web Development Task: Build a Responsive Website, Optimize for SEO, and Ensure Cross-Browser Compatibility for Client's Business Needs",
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
    title:
      "Mobile App Design: Create User-Friendly Interface, Incorporate Brand Identity, and Optimize Performance for iOS and Android Platforms",
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
    title:
      "SEO Optimization: Enhance Website Ranking with Keywords, Improve Content, and Boost User Engagement for Better Organic Traffic and Results",
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
];

const BrowseTaskPage = () => {
  const [filteredTasks, setFilteredTasks] = useState(taskData);

  return (
    <>
      <Header />
      <div className="browse_task_page">
        <Container fluid>
          {/* Main Content */}
          <div className="browse_task_page_wrapper">
            {/* Task List */}
            <div className="task_list">
              <Row>
                {/* Filter Section */}
                <Col lg={3}>
                  <div className="bg-white p-4 rounded shadow-sm border ">
                    <TaskFilter data={taskData} results={setFilteredTasks} />
                  </div>
                </Col>
                <Col>
                  {filteredTasks.slice(0, 6).map((items, index) => (
                    <TaskCard
                      title={items.title}
                      price={items.price}
                      location={items.location}
                      flexible={items.flexible}
                      date={items.date}
                      requested={items.requested}
                      status={items.status}
                    />
                  ))}
                  <FormControl
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: 3,
                    }}
                  >
                    <Button style={{ backgroundColor: "blue" }}>
                      Load More
                    </Button>
                  </FormControl>
                </Col>
              </Row>
            </div>
          </div>
        </Container>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
// const styles: { [key: string]: React.CSSProperties } = {
export default BrowseTaskPage;

import React, { useState } from "react";
import TaskFilter from "../../../components/data_filter/TaskFilter";
import MyTaskCard from "../../../components/task_card/my-task-card";
import PageTitle from "../../../components/page_title/PageTitle";
import TaskCard from "../../../components/task_card/task-card";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import "./my_task_page.css";
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
const MyTaskPage = () => {
  const [filteredTasks, setFilteredTasks] = useState(taskData);
  return (
    <div className="my_task_page">
      <Container fluid>
        <PageTitle title="my tasks" subtitle="" />
        <Row>
          <Col xs={12} md={5} lg={4}>
            <TaskFilter data={taskData} results={setFilteredTasks} />
          </Col>
          <Col xs={12} md={7} lg={8}>
            {filteredTasks.map((items, index) => (
              <AnimatePresence mode="wait">
                <motion.div
                  key={
                    index ||
                    items.price ||
                    items.location ||
                    items.status ||
                    items.flexible
                  }
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <MyTaskCard
                    title={items.title}
                    category={"cleaning"}
                    location={items.location}
                    budget={items.price}
                    date={items.date}
                    view_btn={function (): void {
                      alert("view");
                    }}
                    edit_btn={function (): void {
                      alert("edit");
                    }}
                    delete_btn={function (): void {
                      alert("delete");
                    }}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyTaskPage;

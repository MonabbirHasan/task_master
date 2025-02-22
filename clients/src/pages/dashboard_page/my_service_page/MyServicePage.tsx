import React, { useState } from "react";
import TaskFilter from "../../../components/data_filter/TaskFilter";
import PageTitle from "../../../components/page_title/PageTitle";
import { motion, AnimatePresence } from "framer-motion";
import { Col, Container, Row, Table } from "react-bootstrap";
import "./my_service_page.css";
import { IconButton, Stack } from "@mui/material";
import {
  Apps,
  ArrowLeft,
  ArrowRight,
  Sort,
  ViewList,
} from "@mui/icons-material";
import ListingManageCard from "../../../components/listing_manage/ListingManageCard";
import ListingManageTable from "../../../components/listing_manage/ListingManageTable";
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
const MyServicePage: React.FC = () => {
  const [filteredTasks, setFilteredTasks] = useState(taskData);
  const [layout_style, setLayoutStyle] = useState("table");
  const [FilterOpen, setFilterOpen] = useState(true);
  return (
    <div className="my_task_page">
      <Container fluid>
        <div className="pb-3">
          <PageTitle title="my service" subtitle="" />
        </div>

        {/* MY TASKS LAYOUT AND FILTER ACTIONS */}
        <div className="my_task_action pb-3">
          <Stack direction="row" justifyContent="" spacing={2}>
            <IconButton
              onClick={() => {
                FilterOpen == false
                  ? setFilterOpen(true)
                  : setFilterOpen(false);
              }}
            >
              <Sort htmlColor="var(--primary-color)" />
            </IconButton>
            <IconButton
              onClick={() => {
                layout_style == "table"
                  ? setLayoutStyle("card")
                  : setLayoutStyle("table");
              }}
            >
              {layout_style == "card" ? (
                <Apps htmlColor="var(--primary-color)" />
              ) : (
                <ViewList htmlColor="var(--primary-color)" />
              )}
            </IconButton>
          </Stack>
        </div>

        {/* MY TASK LISTING DISPLAY SECTION */}
        <section className="my_tasks_listing">
          <Row>
            {FilterOpen == true && (
              <Col xs={12} md={5} lg={3}>
                <TaskFilter data={taskData} results={setFilteredTasks} />
              </Col>
            )}

            <Col xs={12} md={7} lg={FilterOpen == true ? 9 : 12}>
              {layout_style == "table" ? (
                <Table style={styles.table}>
                  <thead>
                    <tr>
                      <th style={styles.th}>Title</th>
                      <th style={styles.th}>Type</th>
                      <th style={styles.th}>Category</th>
                      <th style={styles.th}>Status</th>
                      <th style={styles.th}>Created Date</th>
                      <th style={styles.th}>Action</th>
                    </tr>
                  </thead>
                  {filteredTasks.map((items, index) => (
                    <ListingManageTable
                      id={0}
                      card_type={"card"}
                      type={"service"}
                      title={"I will design a professional logo"}
                      category={"Graphic Design"}
                      status={"completed"}
                      price={300}
                      onEdit={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      onDelete={() => {}}
                      onPreview={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                    />
                  ))}
                  {/* MY TASK PAGINATION */}
                  <IconButton>
                    <ArrowLeft />
                  </IconButton>
                  <IconButton>
                    <ArrowRight />
                  </IconButton>
                </Table>
              ) : (
                <Row>
                  {filteredTasks.map((items, index) => (
                    <Col xs={12} md={5} lg={4}>
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
                          <ListingManageCard
                            id={0}
                            card_type={"card"}
                            type={"gig"}
                            title={"I will design a professional logo"}
                            category={"Graphic Design"}
                            status={"completed"}
                            price={300}
                            onEdit={function (): void {
                              throw new Error("Function not implemented.");
                            }}
                            onDelete={() => {}}
                            onPreview={function (): void {
                              throw new Error("Function not implemented.");
                            }}
                          />
                        </motion.div>
                      </AnimatePresence>
                    </Col>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
        </section>
      </Container>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    boxShadow: "var(--box-shadow-light)",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    border: "1px solid var(--gray-light)",
  },
  th: {
    padding: "12px 15px",
    textAlign: "left",
    fontWeight: "var(--font-weight-medium)",
    fontSize: "14px",
    borderBottom: "2px solid #f4f4f4",
    color: "#555",
  },
};
export default MyServicePage;

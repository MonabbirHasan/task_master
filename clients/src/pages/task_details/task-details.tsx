import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./task-details.css";
import Layout from "../../components/layouts/Layout";
import { Avatar, Stack } from "@mui/material";
import {
  ArrowRightAlt,
  Done,
  Email,
  Groups,
  Payment,
  Phone,
  Task,
  Verified,
  Work,
} from "@mui/icons-material";
import ButtonComponent from "../../components/Buttons/ButtonComponent";
import ReviewCard from "../../components/review_card/ReviewCard";
import TaskCard from "../../components/task_card/task-card";
import Slider from "react-slick";
import DynamicBreadcrumb from "../../components/dynamic_breadcrumb/DynamicBreadcrumb";
const data = [
  {
    title: "Fix a leaky faucet",
    price: "$50",
    location: "New York, NY",
    flexible: "Yes",
    date: "2025-03-05",
    requested: 3,
    status: "Open",
    isFavorit: true,
    card_type: "task",
  },
  {
    title: "Assemble IKEA furniture",
    price: "$75",
    location: "Los Angeles, CA",
    flexible: "No",
    date: "2025-03-10",
    requested: 1,
    status: "assigned",
    isFavorit: false,
    card_type: "task",
  },
  {
    title: "Help with moving boxes",
    price: "$100",
    location: "Chicago, IL",
    flexible: "Yes",
    date: "2025-02-28",
    requested: 2,
    status: "Open",
    isFavorit: true,
    card_type: "task",
  },
  {
    title: "Dog walking for a week",
    price: "$30",
    location: "San Francisco, CA",
    flexible: "No",
    date: "2025-03-01",
    requested: 5,
    status: "Completed",
    isFavorit: false,
    card_type: "task",
  },
];

const TaskDetails: React.FC = () => {
  return (
    <Layout>
      <div className="task_details_page">
        <Container>
          <div className="task_details_page_wrapper">
            {/* BREADCRUMB SECTION */}
            <div className="sdetails_breadcrumbs">
              <DynamicBreadcrumb />
            </div>

            {/* TASKS DETAIL SECTION */}
            <section className="task_details_content">
              <Row>
                {/* LEFT SECTION */}
                <Col lg={8}>
                  <div className="task_details_left">
                    {/* TASK HEADER SECTION */}
                    <div className="task_detail_header">
                      <h1 className="task_detail_title">
                        help me to move my studio in California los Angeles
                      </h1>
                      <Stack
                        className="task_detail_header_category"
                        direction="row"
                        spacing={2}
                      >
                        <p className="task_detail_header_category_item">
                          <span>Category</span>
                          <span>delivery</span>
                        </p>
                        <p className="task_detail_header_category_item">
                          <span>priority</span>
                          <span>urgent</span>
                        </p>
                        <p className="task_detail_header_category_item">
                          <span>Location</span>
                          <span>California los Angeles</span>
                        </p>
                      </Stack>
                    </div>
                    {/* TASK BANNER SECTION */}
                    <div className="task_detail_banner">
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/588d00312e69cf76b7519a11/1510852718286-DFEYLOZ3IQWU8ZWB75JM/Studio+with+carpet.jpg"
                        alt=""
                      />
                    </div>
                    {/* TASK DESCRIPTION */}
                    <div className="task_detail_description">
                      <h2>task about</h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate recusandae qui unde, accusamus numquam,
                        mollitia architecto nemo soluta blanditiis quae minima
                        alias eum hic quisquam rem sed perferendis. Eaque,
                        quibusdam.
                      </p>
                    </div>
                    {/* TASK REVIEW SECTION */}
                    <div className="task_detail_review">
                      <h2 className="task_detail_review_title">Reviews</h2>
                      <ReviewCard
                        avatarUrl="https://eu-images.contentstack.com/v3/assets/bltb5d92757ac1ee045/blt864986663773d3e0/665435935939380b65262cb8/AI-creates-what-the-average-person.png?crop=590,590,x0,y0"
                        name={"Maggie Wallace"}
                        rating={2.5}
                        review={
                          "Aliquam dignissim dolor erat nunc condimentum pulvinar nisl, non venenatis leo fringilla at."
                        }
                        date={"03/12/2021"}
                      />
                    </div>
                    {/* RELATED TASKS SECTION */}
                    <div className="task_detail_related_tasks">
                      <h2 className="task_detail_related_task_title">
                        Related Tasks
                      </h2>
                      <Slider arrows dots>
                        {data.map((item, index) => (
                          <TaskCard
                            key={index}
                            title={item.title}
                            price={item.price}
                            location={item.location}
                            flexible={item.flexible}
                            date={item.date}
                            requested={item.requested}
                            status={item.status}
                            isFavorit={item.isFavorit}
                            card_type={item.card_type}
                            favorit_btn={() => console.log("Favorited!")}
                            message_btn={() => console.log("Message sent!")}
                            onClick={() => console.log("Task clicked!")}
                          />
                        ))}
                      </Slider>
                    </div>
                  </div>
                </Col>
                {/* RIGHT SECTION */}
                <Col lg={4}>
                  <div className="task_details_right">
                    {/* TASKS DETAILS SERVICE PRICE */}
                    <div className="task_details_price">
                      <span>budgets</span>
                      <span>
                        <ArrowRightAlt />
                      </span>
                      <strong>$300</strong>
                    </div>
                    {/* TASK DETAIL BUYER PROFILE */}
                    <div className="task_detail_author_profile">
                      <div className="task_detail_author_profile_head">
                        <Avatar
                          style={{ width: 100, height: 100, margin: "auto" }}
                          src="https://eu-images.contentstack.com/v3/assets/bltb5d92757ac1ee045/blt864986663773d3e0/665435935939380b65262cb8/AI-creates-what-the-average-person.png?crop=590,590,x0,y0"
                        />
                        <p className="task_detail_author_name">jhone doe</p>
                        <p className="task_detail_author_joined">
                          joined on - 2024
                        </p>
                      </div>
                      {/* TASK DETAIL AUTHOR DETAILS */}
                      <div className="task_detail_author_detail">
                        <div className="task_detail_author_detail_list">
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Payment />
                            </span>
                            <span>payment</span>
                          </p>
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Verified
                                htmlColor="var(--primary-color)"
                                fontSize="small"
                              />
                            </span>
                            <span>Verified</span>
                          </p>
                        </div>

                        <div className="task_detail_author_detail_list">
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Email fontSize="small" />
                            </span>
                            <span>email</span>
                          </p>
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Verified
                                htmlColor="var(--primary-color)"
                                fontSize="small"
                              />
                            </span>
                            <span>Verified</span>
                          </p>
                        </div>

                        <div className="task_detail_author_detail_list">
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Phone fontSize="small" />
                            </span>
                            <span>phone number</span>
                          </p>
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Verified
                                htmlColor="var(--primary-color)"
                                fontSize="small"
                              />
                            </span>
                            <span>Verified</span>
                          </p>
                        </div>

                        <div className="task_detail_author_detail_list">
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Work />
                            </span>
                            <span>total hired</span>
                          </p>
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Groups
                                htmlColor="var(--primary-color)"
                                fontSize="small"
                              />
                            </span>
                            <span>25</span>
                          </p>
                        </div>

                        <div className="task_detail_author_detail_list">
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Task />
                            </span>
                            <span>task posted</span>
                          </p>
                          <p className="task_detail_author_detail_list_item">
                            <span>
                              <Done
                                htmlColor="var(--primary-color)"
                                fontSize="small"
                              />
                            </span>
                            <span>25</span>
                          </p>
                        </div>
                      </div>
                      {/* TASK APPLY ACITON */}
                      <div className="task_detail_task_apply">
                        <ButtonComponent
                          onClick={function (): void {
                            throw new Error("Function not implemented.");
                          }}
                          btn_label={"apply on this task"}
                          variant={undefined}
                          size={undefined}
                          color={undefined}
                          disabled={false}
                          style={{
                            borderRadius: 30,
                            textTransform: "capitalize",
                            width: "100%",
                            background: "var(--secondary-color)",
                            color: "var(--text-light)",
                            border: "none",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </section>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default TaskDetails;

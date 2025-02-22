import React, { useState } from "react";
import { Avatar, Stack, IconButton, Divider, Box } from "@mui/material";
import {
  Edit,
  WorkspacePremium,
  Verified,
  Star,
  Share,
  Facebook,
  Add,
  Instagram,
  Twitter,
} from "@mui/icons-material";
import ProfileAnalyticCard from "../../../components/profile_analytic_card/ProfileAnalyticCard";
import PortfolioCard from "../../../components/profile_portfolio/PortfolioCard";
import ButtonComponent from "../../../components/Buttons/ButtonComponent";
import { Col, Container, Row } from "react-bootstrap";
import "./profile_page.css";
import { useNavigate } from "react-router-dom";
interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}
const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Built a fully functional e-commerce platform with React",
      image:
        "https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/ecommerce3-1.jpg",
      link: "https://google.com",
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      description: "Designed an intuitive mobile UI for a food delivery app.",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQExT0O9xOCVhA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711974550479?e=2147483647&v=beta&t=5o7r9HMEnakAj9jtnkq5Gb3ju3bJtxNdzWTyzPI1AiU",
      link: "https://google.com",
    },
    {
      id: 3,
      title: "Mobile App UI Design",
      description: "Designed an intuitive mobile UI for a food delivery app.",
      image:
        "https://media.licdn.com/dms/image/v2/D5612AQExT0O9xOCVhA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1711974550479?e=2147483647&v=beta&t=5o7r9HMEnakAj9jtnkq5Gb3ju3bJtxNdzWTyzPI1AiU",
      link: "https://google.com",
    },
  ]);

  return (
    <div className="profile_page">
      <Container fluid>
        <div className="profile_page_wrapper">
          <Row>
            {/* PROFILE PAGE RIGHT SIDE */}
            <Col lg={4}>
              <div className="profile_page_left_side">
                <div className="profile_page_left_profil_card">
                  <div className="profile_page_head">
                    <span className="text-success badge">Online</span>

                    <ButtonComponent
                      startIcon={<Share />}
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      style={{ textTransform: "capitalize", background: "" }}
                      btn_label={"share"}
                      variant={undefined}
                      size={"small"}
                      color={undefined}
                      disabled={false}
                    />
                  </div>
                  {/* profile author img */}
                  <div className="profile_page_author_img">
                    <Avatar
                      src="https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c43abe18502.png"
                      sx={{ width: 100, height: 100, margin: "auto" }}
                    />
                  </div>
                  {/* profile info */}
                  <div className="profile_page_author_info">
                    <p className="profile_page_author_name">
                      <span>jhone Corby</span>
                      <span>
                        <Verified htmlColor="var(--primary-color)" />
                      </span>
                    </p>
                    <p className="profile_page_author_exp">
                      professional photographer
                    </p>
                    <p className="profile_page_author_rating">
                      <span>
                        <Star fontSize="small" htmlColor="orange" />
                      </span>
                      <span>
                        <Star fontSize="small" htmlColor="orange" />
                      </span>
                      <span>
                        <Star fontSize="small" htmlColor="orange" />
                      </span>
                      <span>
                        <Star fontSize="small" htmlColor="orange" />
                      </span>
                      <span>
                        <Star fontSize="small" htmlColor="orange" />
                      </span>
                      <span>(32)</span>
                      <span>reviews</span>
                    </p>
                    <p className="profile_page_author_level">
                      <span>
                        <WorkspacePremium fontSize="large" />
                      </span>
                      <span>My level - 1</span>
                    </p>
                    <ButtonComponent
                      onClick={function (): void {
                        navigate("/profile/my-progress");
                      }}
                      style={{
                        textTransform: "capitalize",
                        width: "100%",
                        background: "var(--secondary-color)",
                        color: "var(--text-light)",
                        border: "none",
                      }}
                      btn_label={"my progress"}
                      variant={undefined}
                      size={undefined}
                      color={undefined}
                      disabled={false}
                    />
                  </div>
                  {/* author profile about */}
                  <div className="profile_page_author_about">
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      py={2}
                    >
                      <h4>about me</h4>
                      <ButtonComponent
                        startIcon={<Edit />}
                        onClick={function (): void {
                          throw new Error("Function not implemented.");
                        }}
                        style={{
                          textTransform: "capitalize",
                          color: "var(--primary-color)",
                          border: "1px solid var(--primary-color)",
                        }}
                        btn_label={"edit"}
                        variant={undefined}
                        size={"small"}
                        color={undefined}
                        disabled={false}
                      />
                    </Stack>
                    {/* profesional info */}
                    <div className="profile_page_experience">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas et dicta expedita dolorem neque adipisci
                        quisquam quaerat odio obcaecati consectetur.
                      </p>
                      <Divider />
                      <div className="profile_page_experience_list">
                        <li>from</li>
                        <li>Bangladesh</li>
                      </div>
                      <div className="profile_page_experience_list">
                        <li>language</li>
                        <li>hindi,urdu,english</li>
                      </div>
                      <div className="profile_page_experience_list">
                        <li>hourly rate</li>
                        <li>$23</li>
                      </div>
                      <div className="profile_page_experience_list">
                        <li>Certifications</li>
                        <li>Laravel Developer</li>
                      </div>
                    </div>
                  </div>
                  {/* profile social links */}
                  <div className="profile_page_author_social">
                    <Divider />
                    <p>social links</p>
                    <ul>
                      <li>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Box>
                            <span>
                              <Facebook htmlColor="dodgerblue" />
                            </span>
                            <span>Facebook</span>
                          </Box>
                          <Box>
                            <IconButton>
                              <Add />
                            </IconButton>
                          </Box>
                        </Stack>
                      </li>
                      <li>
                        <Stack
                          direction="row"
                          alignItems="center"
                          py={1}
                          justifyContent="space-between"
                        >
                          <Box>
                            <span>
                              <Twitter htmlColor="skyblue" />
                            </span>
                            <span>Twitter</span>
                          </Box>
                          <Box>
                            <IconButton>
                              <Add />
                            </IconButton>
                          </Box>
                        </Stack>
                      </li>
                      <li>
                        <Stack
                          direction="row"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Box>
                            <span>
                              <Instagram htmlColor="#f0f" />
                            </span>
                            <span>Instagram</span>
                          </Box>
                          <Box>
                            <IconButton>
                              <Add />
                            </IconButton>
                          </Box>
                        </Stack>
                      </li>
                    </ul>
                  </div>
                  {/* profile message section */}
                  <div className="profile_page_messages">
                    <Divider />
                    <p className="profile_page_messages_title">inbox</p>
                    <div className="profile_page_message_wrapper">
                      {Array.from({ length: 10 }).map((_, index) => (
                        <div className="profile_page_message_user">
                          <Stack direction="row" justifyContent="space-between">
                            <Stack
                              direction="row"
                              spacing={1}
                              justifyContent="space-between"
                            >
                              <Avatar sx={{ width: 50, height: 50 }} />
                              <div>
                                <p className="profile_page_message_user_name">
                                  eluser
                                </p>
                                <p className="profile_page_message_user_msg">
                                  You: reply done
                                </p>
                              </div>
                            </Stack>
                            <p className="profile_page_message_times">3 week</p>
                          </Stack>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            {/* PROFILE LEFT SIDE*/}
            <Col lg={8}>
              <div className="profile_page_right_side">
                {/* social prof */}
                <div className="profile_page_portfolio">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                  >
                    <h3>my portfolio</h3>
                    <ButtonComponent
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      style={{
                        textTransform: "capitalize",
                        background: "var(--secondary-color)",
                        color: "var(--text-light)",
                        border: "none",
                      }}
                      btn_label={"add portfolio"}
                      variant={undefined}
                      size={undefined}
                      color={undefined}
                      disabled={false}
                    />
                  </Stack>
                  <div className="profile_page_portfolio_item">
                    <Row lg={3}>
                      {portfolio.map((items, index) => (
                        <Col>
                          <PortfolioCard
                            title={items.title}
                            description={items.description}
                            image={items.image}
                            link={items.link}
                            onDelete={function (): void {
                              throw new Error("Function not implemented.");
                            }}
                            onEdit={function (): void {
                              throw new Error("Function not implemented.");
                            }}
                          />
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>

                {/* certificate they have gained */}
                <div className="profile_page_certification">
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    py={2}
                  >
                    <h3>my certification</h3>
                    <ButtonComponent
                      onClick={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      style={{
                        textTransform: "capitalize",
                        background: "var(--secondary-color)",
                        color: "var(--text-light)",
                        border: "none",
                      }}
                      btn_label={"add certification"}
                      variant={undefined}
                      size={undefined}
                      color={undefined}
                      disabled={false}
                    />
                  </Stack>
                </div>

                {/* profile _business tabs */}
                <div className="profile_page_business_analytic">
                  <h3>My business</h3>
                  <Row lg={3}>
                    <Col>
                      <ProfileAnalyticCard
                        title={"uploaded tasks"}
                        value={"20"}
                      />
                    </Col>
                    <Col>
                      <ProfileAnalyticCard
                        title={"uploaded service"}
                        value={"20"}
                      />
                    </Col>
                    <Col>
                      <ProfileAnalyticCard
                        title={"lifetime revenue"}
                        value={"$5400.00"}
                      />
                    </Col>

                    <Col>
                      <ProfileAnalyticCard
                        title={"completed order"}
                        value={"50"}
                      />
                    </Col>

                    <Col>
                      <ProfileAnalyticCard
                        title={"peding order"}
                        value={"40"}
                      />
                    </Col>

                    <Col>
                      <ProfileAnalyticCard
                        title={"total earnings"}
                        value={"$6k.00"}
                      />
                    </Col>

                    <Col>
                      <ProfileAnalyticCard
                        title={"average Rating"}
                        value={"5"}
                      />
                    </Col>

                    <Col>
                      <ProfileAnalyticCard
                        title={"total Reviews"}
                        value={"30"}
                      />
                    </Col>

                    <Col>
                      <ProfileAnalyticCard
                        title={"active Clients"}
                        value={"4"}
                      />
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {};
export default ProfilePage;

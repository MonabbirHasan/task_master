import React, { useMemo, useState } from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import "./home-page.css";
import Layout from "../../components/layouts/Layout";
import HowItWorks from "../../components/how_it_work/HowItWorks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBanner from "../../components/home_banner/home-banner";
import FeaturedListing from "../../components/featured_listing/FeaturedListing";
import { useNavigate } from "react-router-dom";
const Home: React.FC = () => {
  const [index, setIndex] = useState<number>(0);
  const navigate = useNavigate();
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of items visible
    slidesToScroll: 1, // Number of items to scroll
    arrows: true,
    nextArrow: <button style={{ right: "-25px" }}>→</button>,
    prevArrow: <button style={{ left: "-25px" }}>←</button>,
    responsive: [
      {
        breakpoint: 960, // Adjust slides for tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600, // Adjust slides for mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const featuredListings = useMemo(
    () => [
      "iPhone 13 Pro",
      "Tesla Model 3",
      "Luxury Apartment, iPhone 13 Pro",
      "Tesla Model 3",
      "Luxury Apartment",
    ],
    []
  );
  const featuredTasks = [
    {
      id: 1,
      title: "Web Development",
      description: "Build a professional website",
      price: "$150",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      title: "Graphic Design",
      description: "Design a modern logo",
      price: "$100",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      title: "SEO Services",
      description: "Improve website ranking",
      price: "$200",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 4,
      title: "Content Writing",
      description: "Write engaging blog posts",
      price: "$50",
      image: "https://via.placeholder.com/200",
    },
  ];
  const HeroSection = () => {
    return (
      <div className="hero-container">
        <div className="hero-content">
          <h1>Find the Perfect Task for You. Anytime. Anywhere.</h1>
          <p>Browse through thousands of tasks or offer your services today.</p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for tasks..."
              className="search-bar"
            />
          </div>
          <div className="cta-buttons">
            <button className="primary-cta">Post a Task</button>
            <button className="secondary-cta">Browse Tasks</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <div className="home_page">
        <Container>
          {/* Hero Section */}
          <section className="home-banner-section">
            <HomeBanner />
          </section>
          {/* How It Works */}
          <section className="how_it_work_section">
            <HowItWorks />
          </section>
          {/* Featured Tasks */}
          <section className="py-16">
            <FeaturedListing />
          </section>

          {/* Call to Action */}
          <section className="call_to_action_button">
            <Row className="justify-content-center">
              <Col md={8}>
                <Card className="cta-card text-center">
                  <Card.Body>
                    <Card.Title as="h2" className="cta-title">
                      Get Started Today!
                    </Card.Title>
                    <Card.Text className="cta-description">
                      Whether you want to post a task or find a job, start now
                      and connect with skilled professionals.
                    </Card.Text>
                    <div className="cta-buttons">
                      <Button
                        onClick={() => navigate("/post-task")}
                        variant="contained"
                        className="cta-btn"
                      >
                        Post a Task
                      </Button>
                      <Button variant="outlined" className="cta-btn">
                        Find a Task
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;

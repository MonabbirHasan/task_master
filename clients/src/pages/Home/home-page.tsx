import React, { lazy } from "react";
import "./home-page.css";
import ServiceSlider from "../../components/service_slider/service-slider";
const Layout = lazy(() => import("../../components/layouts/Layout"));
import Testimonial from "../../components/testimonial/Testimonial";
import HomeBanner from "../../components/home_banner/home-banner";
import TaskSteps from "../../components/task_steps/task-steps";
import { Container } from "react-bootstrap";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Container>
        {/* HOME PAGE BANNER SECTION START HERE */}
        <HomeBanner />
        {/* POST YOUR FIRST TASK SECTION START HERE */}
        <ServiceSlider />
        {/* POST YOUR FIRST_TASK_STEPS START HERE */}
        <TaskSteps />
        {/* TESTIMONIAL SECTION START HERE */}
        <Testimonial />
      </Container>
    </Layout>
  );
};

export default HomePage;

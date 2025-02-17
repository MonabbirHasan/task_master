import React, { useState } from "react";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import "./services_page.css";
import { Col, Container, Row } from "react-bootstrap";
import ServiceFilter from "../../components/data_filter/ServiceFilter";
import GigCard from "../../components/gig_card/GigCard";
const services_data = [
  {
    id: 1,
    title: "Professional quick home repairs",
    category: "Handyman",
    hourlyRate: 34,
    availability: "Same Day",
    warranty: "Limited Warranty",
    rating: 4.0,
    reviews: 12,
  },
  {
    id: 2,
    title: "Creative garden and landscape design",
    category: "Gardening",
    hourlyRate: 22,
    availability: "1-Day Notice",
    warranty: "Limited Warranty",
    rating: 3.5,
    reviews: 8,
  },
  {
    id: 3,
    title: "Quick garage cleanout service",
    category: "Cleaning",
    hourlyRate: 37,
    availability: "1-Day Notice",
    warranty: "Full Warranty",
    rating: 4.0,
    reviews: 15,
  },
  {
    id: 4,
    title: "Floral design and arrangements",
    category: "Gardening",
    hourlyRate: 23,
    availability: "Same Day",
    warranty: "Full Warranty",
    rating: 4.0,
    reviews: 10,
  },
  {
    id: 5,
    title: "Mobile car detailing and cleaning",
    category: "Car Services",
    hourlyRate: 45,
    availability: "Same Day",
    warranty: "Limited Warranty",
    rating: 4.5,
    reviews: 20,
  },
  {
    id: 6,
    title: "Custom furniture building and repairs",
    category: "Handyman",
    hourlyRate: 50,
    availability: "3-Day Notice",
    warranty: "Full Warranty",
    rating: 4.7,
    reviews: 25,
  },
  {
    id: 7,
    title: "Pressure washing and exterior cleaning",
    category: "Cleaning",
    hourlyRate: 28,
    availability: "1-Day Notice",
    warranty: "Limited Warranty",
    rating: 4.3,
    reviews: 18,
  },
  {
    id: 8,
    title: "Home security system installation",
    category: "Handyman",
    hourlyRate: 55,
    availability: "Same Day",
    warranty: "Full Warranty",
    rating: 4.8,
    reviews: 30,
  },
  {
    id: 9,
    title: "Pet grooming services",
    category: "Pet Services",
    hourlyRate: 20,
    availability: "1-Day Notice",
    warranty: "Limited Warranty",
    rating: 3.9,
    reviews: 22,
  },
  {
    id: 10,
    title: "Lawn care and maintenance",
    category: "Gardening",
    hourlyRate: 30,
    availability: "Same Day",
    warranty: "Full Warranty",
    rating: 4.4,
    reviews: 17,
  },
  {
    id: 11,
    title: "Painting and home decor",
    category: "Handyman",
    hourlyRate: 40,
    availability: "1-Day Notice",
    warranty: "Full Warranty",
    rating: 4.6,
    reviews: 14,
  },
  {
    id: 12,
    title: "Deep cleaning and sanitizing services",
    category: "Cleaning",
    hourlyRate: 25,
    availability: "Same Day",
    warranty: "Limited Warranty",
    rating: 4.1,
    reviews: 11,
  },
  {
    id: 13,
    title: "Moving and relocation services",
    category: "Moving",
    hourlyRate: 60,
    availability: "3-Day Notice",
    warranty: "Full Warranty",
    rating: 4.3,
    reviews: 19,
  },
  {
    id: 14,
    title: "Window cleaning and repairs",
    category: "Cleaning",
    hourlyRate: 32,
    availability: "Same Day",
    warranty: "Limited Warranty",
    rating: 4.0,
    reviews: 13,
  },
  {
    id: 15,
    title: "Pool maintenance and cleaning",
    category: "Cleaning",
    hourlyRate: 42,
    availability: "1-Day Notice",
    warranty: "Full Warranty",
    rating: 4.6,
    reviews: 21,
  },
];

const ServicesPage = () => {
  const [filteredServices, setFilteredServices] =
    useState<any[]>(services_data);
  return (
    <div className="service_page">
      <Header />
      <Container fluid>
        <div className="service_page_wrapper">
          <div className="service_filter">
            {/* <ServiceFilter data={services_data} results={setFilteredServices} /> */}
          </div>
          {/* service listing */}
          <div className="service_listing">
            <Row lg={4}>
              {filteredServices.map((service, index) => (
                <GigCard
                  title={""}
                  category={""}
                  hourlyRate={""}
                  availability={""}
                  warranty={""}
                  tags={""}
                  description={""}
                  image={""}
                  onClick={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  skills={""}
                  clientReviews={[]}
                  estimatedCompletionTime={""}
                  location={""}
                  priceRange={""}
                  deliveryMethod={""}
                  extraServices={[]}
                />
              ))}
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default ServicesPage;

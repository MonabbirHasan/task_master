import React from "react";
import "./profile_page.css";
import { Col, Container, Row } from "react-bootstrap";
import { Avatar, Rating, Stack } from "@mui/material";
import { Verified } from "@mui/icons-material";
import Header from "../../../components/layouts/Header/Header";
// import ServiceCard from "../../../components/gig_card/ServiceCard";
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
];
const ProfileViewPage = () => {
  return (
    <>
      <Header />
      <div className="profile_page">
        <Container>
          <div className="profile_page_wrapper">
            <Row>
              {/* PROFILE PAGE LEFT */}
              <Col lg={3}>
                <div className="profile_page_left">
                  <div className="profile_avater shadow-sm rounded-3 p-3">
                    <Avatar
                      src="https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltb5d92757ac1ee045/blt864986663773d3e0/665435935939380b65262cb8/AI-creates-what-the-average-person.png%3Fcrop%3D590%2C590%2Cx0%2Cy0"
                      sx={{ width: 100, height: 100, margin: "auto" }}
                    />
                    <div className="text-center pt-2">
                      <Rating />
                      <h5>@jhone doe</h5>
                      <p className=" text-capitalize">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Fuga culpa dolores minus laudantium exercitationem
                        temporibus maiores
                      </p>
                    </div>
                    <Stack
                      direction="row"
                      py={2}
                      justifyContent="space-between"
                    >
                      <span>Badge</span>
                      <span>VIP</span>
                    </Stack>
                    <Stack direction="row" justifyContent="space-between">
                      <span>Country</span>
                      <span>America</span>
                    </Stack>
                    <Stack
                      direction="row"
                      py={2}
                      justifyContent="space-between"
                    >
                      <span>KYC</span>
                      <span>
                        <Verified />
                      </span>
                    </Stack>
                  </div>
                </div>
              </Col>

              {/* PROFILE PAGE SERVICE */}
              <Col lg={9}>
                <div className="profile_page_service p-4">
                  {/* service listing */}
                  <div className="service_listing">
                    <Row lg={3}>
                      {services_data.map((service, index) => (
                        <Col>
                          {/* <ServiceCard
                            edit={false}
                            availability={service.availability}
                            category={service.category}
                            hourlyRate={service.hourlyRate}
                            img="https://ideas.darden.virginia.edu/sites/default/files/styles/full_width_1024px_5_3_/public/2024-09/AI%20ART%20ITA.jpg?itok=CIaF2iIX"
                            rating={service.rating}
                            reviews={service.reviews}
                            title={service.title}
                            warranty={service.warranty}
                            key={index}
                          /> */}
                        </Col>
                      ))}
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProfileViewPage;

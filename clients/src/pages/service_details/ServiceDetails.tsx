import React from "react";
import "./service_details.css";
import { Breadcrumb, Card, Col, Container, Row } from "react-bootstrap";
import { Home, Star } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import GigCard from "../../components/gig_card/GigCard";
import ReviewCard from "../../components/review_card/ReviewCard";
import Layout from "../../components/layouts/Layout";
import Slider from "react-slick";
const service_data = [
  {
    title: "Professional Logo Design",
    category: "Graphic Design",
    hourlyRate: "$25/hr",
    availability: "Available",
    warranty: "30-day revision period",
    tags: ["logo", "branding", "design"],
    description:
      "I will create a professional and unique logo for your brand, ensuring high quality and originality.",
    image: "https://example.com/logo-design.jpg",
    skills: ["Adobe Illustrator", "Photoshop", "Typography"],
    clientReviews: [
      {
        name: "John Doe",
        rating: 5,
        comment: "Amazing work! The logo exceeded my expectations.",
      },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Great design, but delivery took a bit longer than expected.",
      },
    ],
    estimatedCompletionTime: "3-5 days",
    location: "Remote",
    priceRange: "$50 - $200",
    deliveryMethod: "Digital",
    extraServices: [
      {
        name: "Express Delivery",
        price: "$20",
      },
      {
        name: "Source File",
        price: "$10",
      },
    ],
  },
  {
    title: "Custom WordPress Website Development",
    category: "Web Development",
    hourlyRate: "$40/hr",
    availability: "Available",
    warranty: "60-day bug fix support",
    tags: ["wordpress", "web development", "responsive design"],
    description:
      "I will design and develop a fully responsive WordPress website tailored to your business needs.",
    image: "https://example.com/wordpress-site.jpg",
    skills: ["WordPress", "HTML", "CSS", "JavaScript"],
    clientReviews: [
      {
        name: "Alice Johnson",
        rating: 5,
        comment: "Fantastic website, very professional and easy to manage!",
      },
    ],
    estimatedCompletionTime: "7-10 days",
    location: "Remote",
    priceRange: "$300 - $1000",
    deliveryMethod: "Digital",
    extraServices: [
      {
        name: "SEO Optimization",
        price: "$50",
      },
      {
        name: "E-commerce Setup",
        price: "$100",
      },
    ],
  },
];
const review_data = [
  {
    name: "John Doe",
    rating: 5,
    review:
      "Absolutely fantastic service! The work was delivered on time and exceeded my expectations.",
    date: "2025-02-15",
  },
  {
    name: "Jane Smith",
    rating: 4,
    review:
      "Great quality, but the response time was a bit slow. Overall, I'm satisfied!",
    date: "2025-02-10",
  },
  {
    name: "Alice Johnson",
    rating: 5,
    review:
      "Superb experience! The seller was professional and very responsive.",
    date: "2025-02-05",
  },
  {
    name: "Mark Wilson",
    rating: 3,
    review:
      "Decent work, but I expected better communication. Needs improvement.",
    date: "2025-02-01",
  },
];

const ServiceDetails = () => {
  const img = [
    "https://i.pinimg.com/736x/ca/63/51/ca6351f785b51fcd4fe9c82747cd52b8.jpg",
    "https://i.pinimg.com/736x/ca/63/51/ca6351f785b51fcd4fe9c82747cd52b8.jpg",
    "https://i.pinimg.com/736x/ca/63/51/ca6351f785b51fcd4fe9c82747cd52b8.jpg",
    "https://i.pinimg.com/736x/ca/63/51/ca6351f785b51fcd4fe9c82747cd52b8.jpg",
  ];
  return (
    <Layout>
      <div className="service_details">
        <Container>
          <div className="service_details_wrapper">
            {/* BREADCRUMB SECTION */}
            <div className="sdetails_breadcrumbs">
              <Breadcrumb>
                <Breadcrumb.Item>
                  <Home /> Home
                </Breadcrumb.Item>
                <Breadcrumb.Item>Library</Breadcrumb.Item>
                <Breadcrumb.Item active>Data</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Row>
              <Col lg={8}>
                <div className="service_details_left">
                  {/* SERVICE DETAILS HEAD */}
                  <div className="service_detais_head">
                    <h1>
                      i will develop your business platform with your
                      requirements
                    </h1>
                  </div>
                  {/* SERVICE DETAILS BANNER */}
                  <div className="service_detais_banner">
                    <img
                      className="service_detais_banner_main"
                      src="https://i.pinimg.com/736x/ca/63/51/ca6351f785b51fcd4fe9c82747cd52b8.jpg"
                      alt=""
                    />
                    <div className="service_detais_banner_slider">
                      {img.map((item, index) => (
                        <img
                          className="service_detais_banner_item"
                          src={item}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                  {/* SERVICE DETAILS DESCRIPTION */}
                  <div className="service_detais_description">
                    <h2>aboute the service</h2>
                    <p>
                      <strong>
                        🚀 Professional Website Development - Custom, Responsive
                        & High-Performing
                      </strong>
                    </p>

                    <p>
                      Are you looking for a{" "}
                      <strong>
                        stunning, high-performing, and fully responsive website
                      </strong>
                      that enhances your online presence? Look no further! I am
                      a professional
                      <strong>website developer</strong> with expertise in
                      modern web technologies, delivering high-quality websites
                      tailored to your specific needs.
                    </p>

                    <p>
                      <strong>🔥 What I Offer:</strong>
                    </p>
                    <p>
                      ✔️ <strong>Custom Website Development</strong> – Built
                      from scratch to match your unique brand identity
                    </p>
                    <p>
                      ✔️ <strong>Responsive Design</strong> – Ensuring your
                      website looks great on all devices
                    </p>
                    <p>
                      ✔️ <strong>Fast & SEO-Optimized</strong> – Boost search
                      rankings and improve user experience
                    </p>
                    <p>
                      ✔️ <strong>E-commerce Integration</strong> – Set up an
                      online store with WooCommerce or Shopify
                    </p>
                    <p>
                      ✔️ <strong>CMS Websites</strong> – WordPress, Webflow, or
                      custom-built for easy management
                    </p>
                    <p>
                      ✔️ <strong>Fixes & Enhancements</strong> – Debugging,
                      performance improvements, and feature additions
                    </p>
                    <p>
                      ✔️ <strong>Database & API Integration</strong> –
                      Seamlessly connect third-party services
                    </p>
                    <p>
                      ✔️ <strong>Security & Speed Optimization</strong> – Secure
                      and high-speed website performance
                    </p>

                    <p>
                      <strong>🛠 Technologies I Use:</strong>
                    </p>
                    <p>
                      ✅ <strong>Frontend:</strong> React.js, Next.js, Vue.js,
                      HTML5, CSS3, JavaScript
                    </p>
                    <p>
                      ✅ <strong>Backend:</strong> Node.js, Express.js, Laravel,
                      PHP
                    </p>
                    <p>
                      ✅ <strong>Databases:</strong> PostgreSQL, MySQL, MongoDB
                    </p>
                    <p>
                      ✅ <strong>CMS Platforms:</strong> WordPress, Webflow,
                      Shopify
                    </p>
                    <p>
                      ✅ <strong>Deployment:</strong> AWS, Firebase, Vercel,
                      DigitalOcean
                    </p>

                    <p>
                      <strong>📌 Why Choose Me?</strong>
                    </p>
                    <p>
                      ✔️ <strong>Experienced & Reliable</strong> – 5+ years in
                      website development
                    </p>
                    <p>
                      ✔️ <strong>User-Centric Approach</strong> – Focused on
                      usability, aesthetics, and functionality
                    </p>
                    <p>
                      ✔️ <strong>Timely Delivery</strong> – Your project will be
                      completed within the agreed timeframe
                    </p>
                    <p>
                      ✔️ <strong>Affordable & Scalable Solutions</strong> –
                      High-quality service at a reasonable price
                    </p>
                    <p>
                      ✔️ <strong>100% Client Satisfaction</strong> – I
                      prioritize client needs and ensure top-notch quality
                    </p>

                    <p>
                      <strong>🎯 How It Works:</strong>
                    </p>
                    <p>1️⃣ Discuss your project requirements & goals</p>
                    <p>2️⃣ Plan the website structure and features</p>
                    <p>3️⃣ Develop and design the website</p>
                    <p>4️⃣ Test and optimize for performance & security</p>
                    <p>5️⃣ Deliver the final product with revisions if needed</p>

                    <p>
                      <strong>
                        💬 Have a project in mind? Let's bring your vision to
                        life!
                      </strong>
                    </p>
                    <p>
                      📩 <strong>Contact me now, and let’s get started!</strong>
                    </p>
                  </div>
                  {/* SERVICE DETAILS REVIEWS ABOUT THERE GIGS */}
                  <div className="service_detais_reviews">
                    <h3>client reviews</h3>
                    {review_data.map((review, index) => (
                      <ReviewCard
                        key={index}
                        name={review.name}
                        rating={review.rating}
                        review={review.review}
                        date={review.date}
                        avatarUrl="https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png"
                      />
                    ))}
                  </div>
                  {/* SERVICE DETAILS RELATED GIG THEY HAVE UPLOADED */}
                  <div className="service_detais_related_gigs">
                    <h4>my services</h4>
                    <Row>
                      {service_data.map((items, index) => (
                        <Col>
                          <div className="service_card">
                            <div className="service_card_left">
                              <img
                                src="https://i.pinimg.com/736x/ca/63/51/ca6351f785b51fcd4fe9c82747cd52b8.jpg"
                                alt=""
                              />
                            </div>
                            <div className="service_card_right">
                              <p className="service_card_right_title">
                                Lorem ipsum dolor sit amet.
                              </p>
                              <p className="service_card_right_content">
                                <span>mobile app development</span>
                                <span>website development</span>
                              </p>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                  {/* SERVICE DETAILS RELATED SERVICES OTHER PROVIDE */}
                  <div className="service_detais_related_service">
                    <h4>related services</h4>
                    <Slider
                      arrows
                      dots
                      slidesToShow={2}
                      swipe
                      slidesToScroll={1}
                    >
                      {Array.from({ length: 5 }).map((items, index) => (
                        <GigCard
                          title={""}
                          category={""}
                          hourlyRate={""}
                          availability={""}
                          warranty={""}
                          tags={""}
                          description={""}
                          image={""}
                          skills={""}
                          clientReviews={[]}
                          estimatedCompletionTime={""}
                          location={""}
                          priceRange={""}
                          deliveryMethod={""}
                          extraServices={[]}
                          onClick={function (): void {
                            throw new Error("Function not implemented.");
                          }}
                        />
                      ))}
                    </Slider>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="service_detais_right">
                  <div className="service_details_author_experience">
                    <h5>i will provide</h5>
                    <div className="service_details_author_experience_list">
                      <li>from</li>
                      <li>Bangladesh</li>
                    </div>
                    <div className="service_details_author_experience_list">
                      <li>language</li>
                      <li>hindi,urdu,english</li>
                    </div>
                    <div className="service_details_author_experience_list">
                      <li>hourly rate</li>
                      <li>$23</li>
                    </div>
                    <div className="service_details_author_experience_list">
                      <li>Badges</li>
                      <li>Top Rated</li>
                    </div>

                    <div className="service_details_author_experience_list">
                      <li>Completed Orders</li>
                      <li>(23)</li>
                    </div>
                  </div>
                  {/* SERVICE DETAILS AUTHOR PROFILE */}
                  <div className="service_detais_author_profile">
                    <div className="service_detais_author_img">
                      <Avatar
                        style={{ width: 100, height: 100, margin: "auto" }}
                        src="https://cdn.lucidpic.com/cdn-cgi/image/w=600,format=auto,metadata=none/66c4384702f8f.png"
                      />
                    </div>
                    <p className="service_detais_author_name">jhone corbay</p>
                    <p className="service_detais_author_title">
                      full-stack developer
                    </p>
                    <p className="service_detais_author_title">
                      5+ years in Web Development
                    </p>
                  </div>
                  {/* SERVICE DETAILS AUTHOR EXPERIENCE */}
                  <div className="service_details_author_experience">
                    <h5>about me</h5>
                    <div className="service_details_author_experience_list">
                      <li>from</li>
                      <li>Bangladesh</li>
                    </div>
                    <div className="service_details_author_experience_list">
                      <li>language</li>
                      <li>hindi,urdu,english</li>
                    </div>
                    <div className="service_details_author_experience_list">
                      <li>hourly rate</li>
                      <li>$23</li>
                    </div>
                    <div className="service_details_author_experience_list">
                      <li>Badges</li>
                      <li>Top Rated</li>
                    </div>
                    <div className="service_details_author_experience_list">
                      <li>Certifications</li>
                      <li>Laravel Developer</li>
                    </div>
                    <div className="service_details_author_experience_list">
                      <li>Rating & Reviews</li>
                      <li>
                        <Star htmlColor="orange" fontSize="small" />
                        <Star htmlColor="orange" fontSize="small" />
                        <Star htmlColor="orange" fontSize="small" />
                        <Star htmlColor="orange" fontSize="small" />
                        <span>(10)</span>
                      </li>
                    </div>
                    <div className="service_details_author_experience_list">
                      <li>Completed Orders</li>
                      <li>(23)</li>
                    </div>
                  </div>
                  {/* SERVICE DETAILS AUTHOR PORTFOLIO */}
                  <div className="service_detail_author_portfolio"></div>
                </div>
              </Col>
            </Row>
            {/* SERVICE DETAILS HEAD */}
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ServiceDetails;

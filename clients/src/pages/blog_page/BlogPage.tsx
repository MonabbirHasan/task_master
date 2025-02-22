import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import BlogCard from "../../components/blog_card/BlogCard";
import Layout from "../../components/layouts/Layout";
import { blog_data } from "../../utilis/blogs_data";
import { FormControl } from "@mui/material";
import { Link } from "react-router-dom";
import "./blog_page.css";
const data = {
  blog_id: 1,
  title: "JKP Raid Bookstores, Seize 688",
  author: {
    user_id: 123,
    name: "John Doe",
    profile_image_url:
      "https://bloximages.chicago2.vip.townnews.com/romesentinel.com/content/tncms/assets/v3/editorial/4/26/4268520b-558e-5762-885d-5d9bf8c281c7/67ae8a1d0f13d.image.jpg?resize=300%2C200",
  },
  content: "Gottesdienst für Betroffene des Münchner Anschlags...",
  cover_image_url:
    "https://kashmirobserver.net/wp-content/uploads/2024/07/JK-Police-Logo-1.jpg",
  likes_count: 120,
  created_at: "2025-02-22T10:00:00Z",
};

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blog_data.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <Container>
        <div className="blog-container">
          {/* BLOG SEARCH AREA */}
          <div className="blog_search">
            <FormControl fullWidth sx={{ pb: 4 }}>
              <Form.Control
                type="text"
                placeholder="Search blogs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </FormControl>
          </div>
          
          <section className="blog_section">
            <Row lg={4}>
              {filteredBlogs.map((blog) => (
                <Col>
                  <div key={blog.article_id} className="blog-card">
                    <img
                      src={blog.image_url == null ? "" : blog.image_url}
                      alt={blog.title}
                      className="blog-image"
                    />
                    <div className="blog-info">
                      <span className="blog-category">{blog.category}</span>
                      <h3 className="blog_title">{blog.title}</h3>
                      <Link
                        to={`/blog/${blog.article_id}`}
                        className="read-more"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default BlogPage;

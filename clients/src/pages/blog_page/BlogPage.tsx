import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import "./blog_page.css";
import { blog_data } from "../../utilis/blogs_data";
import { Col, Container, Row } from "react-bootstrap";

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = blog_data.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" ">
      <Header />
      <Container>
        <div className="blog-container">
          <input
            type="text"
            placeholder="Search blogs..."
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="">
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
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blog_data.find((b) => b.article_id === String(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="main-container">
      <Header />
      <div className="blog-detail-container">
        <img
          src={blog.image_url == null ? "" : blog.image_url}
          alt={blog.title}
          className="blog-detail-image"
        />
        <h1>{blog.title}</h1>
        <span className="blog-category">{blog.category}</span>
        <p>By {blog.creator} • 34 Comments</p>
        <p>{blog.content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;

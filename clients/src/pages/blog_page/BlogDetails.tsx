import { useParams } from "react-router-dom";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";
import { blog_data } from "../../utilis/blogs_data";
import "./blog_page.css";

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = blog_data.find((b) => b.article_id === String(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="main-container">
      <Header />
      <div className="blog-detail-container">
        {blog.image_url && (
          <img
            src={blog.image_url}
            alt={blog.title}
            className="blog-detail-image"
          />
        )}
        <h1>{blog.title}</h1>
        <span className="blog-category">{blog.category}</span>
        <p className="blog-meta">By {blog.creator} • 34 Comments</p>
        <p className="blog-content">{blog.content}</p>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;

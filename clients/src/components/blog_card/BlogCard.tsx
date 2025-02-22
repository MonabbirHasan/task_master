import React from "react";
import "./blog_card.css";
interface BlogProps {
  title: string;
  date: string;
  thumbnail: string;
  category: string;
  views: number;
  content: string;
  author_img: string;
  author_name: string;
}
const BlogCard: React.FC<BlogProps> = ({}) => {
  return <div className="blog-card">
    
  </div>;
};

export default BlogCard;

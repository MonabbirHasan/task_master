import React from "react";
import "./button.css";
import { ArrowRightAlt } from "@mui/icons-material";

interface ButtonProps {
  onClick: () => void;
  title: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ onClick, title, style = {} }) => {
  return (
    <button style={style} className="post-task-btn" onClick={onClick}>
      {title}
      <ArrowRightAlt />
    </button>
  );
};

export default Button;

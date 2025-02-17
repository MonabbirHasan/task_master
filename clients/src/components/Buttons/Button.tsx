import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  onClick: () => void;
  // Updated for ReactNode (to allow JSX)
  btn_label: string | React.ReactNode;
  variant: string | any;
  size: string | any;
  color: string | any;
  style?: React.CSSProperties;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  btn_label,
  variant = "outlined",
  color,
  style = { textTransform: "capitalize" },
  size,
}) => {
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      onClick={onClick}
      style={style}
    >
      {btn_label}
    </Button>
  );
};

export default ButtonComponent;

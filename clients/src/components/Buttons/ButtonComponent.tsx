import React, { JSX } from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  onClick: () => void;
  btn_label: string | React.ReactNode;
  variant: string | any;
  size: string | any;
  color: string | any;
  style?: React.CSSProperties;
  disabled: boolean;
  startIcon?: JSX.Element;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  onClick,
  btn_label,
  variant = "outlined",
  color,
  style = { textTransform: "capitalize" },
  size,
  disabled,
  startIcon,
}) => {
  return (
    <Button
      startIcon={startIcon}
      disabled={disabled}
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

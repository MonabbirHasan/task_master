import { FormControl, TextField } from "@mui/material";
import React from "react";
import { Form } from "react-bootstrap";

interface InputFieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  type?: string;
  className?: string;
  fullWidth?: boolean;
  label?: string;
  multiline?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  onChange,
  value,
  placeholder,
  type = "text",
  className,
  fullWidth = false,
  label,
  multiline = false,
  error,
}) => {
  return (
    <div>
      <FormControl fullWidth={fullWidth} sx={{ marginTop: 5 }}>
        {label && <Form.Label>{label}</Form.Label>}
        <TextField
          onChange={onChange}
          value={value}
          className={className}
          type={type}
          placeholder={placeholder}
          variant="filled"
          size="small"
          multiline={multiline}
        />
        <span className="text-danger text-capitalize">{error}</span>
      </FormControl>
    </div>
  );
};

export default InputField;

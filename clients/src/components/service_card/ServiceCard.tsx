import { Edit } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
interface ServiceProps {
  title: string;
  category: string;
  hourlyRate: number;
  availability: string | number;
  warranty: string | number;
  rating: string | number;
  reviews: string | number;
  img: string;
  edit: boolean;
}
const ServiceCard: React.FC<ServiceProps> = (data) => {
  return (
    <div style={styles.service_card}>
      <div>
        <img src={data.img} alt="User" style={styles.service_card_img} />
        <h3 style={styles.service_card_title}>{data.title}</h3>
        <p style={styles.category}>{data.category}</p>
      </div>
      {/* Rating */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <div
          style={{
            width: "50px",
            height: "4px",
            background: "#f5c842",
            borderRadius: "2px",
          }}
        />
        <span style={{ fontSize: "14px", color: "#f5c842" }}>
          ⭐ {data.rating}
        </span>
        <span style={{ fontSize: "12px", color: "#777" }}>
          ({data.reviews})
        </span>
      </div>
      {/* Notice & Warranty */}
      <div
        style={{
          marginTop: "10px",
          fontSize: "14px",
          color: "#444",
        }}
      >
        🗓 7-Day Notice • ✔ {data.warranty}
      </div>

      {/* Price */}
      <p
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#0fa958",
          marginTop: "10px",
        }}
      >
        ${data.hourlyRate} / hr
      </p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  service_card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "var(--background-color)",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "var(--box-shadow-light)",
    border: "1px solid white",
    textAlign: "center",
    transition: "0.3s",
    marginBottom: 10,
    cursor: "pointer",
    height: 300,
  },
  service_card_img: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "10px",
  },
  service_card_title: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "5px",
  },
  service_card_category: { fontSize: "12px", color: "#777", margin: "5px 0" },
};
export default ServiceCard;

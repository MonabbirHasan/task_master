import { Category, Close, Edit, Visibility } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React from "react";
type TaskCardProps = {
  title: string;
  category: string;
  location: string;
  budget: string;
  date: string;
  view_btn: () => void;
  edit_btn: () => void;
  delete_btn: () => void;
};
const MyTaskCard: React.FC<TaskCardProps> = ({
  title,
  category,
  location,
  budget,
  date,
  view_btn,
  edit_btn,
  delete_btn,
}) => {
  return (
    <div className="my-task-card" style={styles.card}>
      <li style={styles.list}>
        <small>title</small>
        <p style={styles.text} className="p-0 m-0">
          {title?.slice(0, 20) + ".."}
        </p>
      </li>
      <li style={styles.item}></li>
      <li style={styles.list}>
        <small>category</small>
        <p style={styles.text} className="p-0 m-0">
          {category}
        </p>
      </li>
      <li style={styles.item}></li>
      <li style={styles.list}>
        <small>location</small>
        <p style={styles.text} className="p-0 m-0">
          {location}
        </p>
      </li>
      <li style={styles.item}></li>
      <li style={styles.list}>
        <small>budget</small>
        <p style={styles.text} className="p-0 m-0">
          {budget}
        </p>
      </li>
      <li style={styles.item}></li>
      <li style={styles.list}>
        <small>date</small>
        <p style={styles.text} className="p-0 m-0">
          {date}
        </p>
      </li>
      <li style={styles.item}></li>
      <li style={styles.list}>
        <small>action</small>
        <p style={styles.text} className="p-0 m-0">
          <IconButton onClick={view_btn}>
            <Visibility htmlColor="var(--secondary-color)" fontSize="small" />
          </IconButton>
          <IconButton onClick={edit_btn}>
            <Edit fontSize="small" htmlColor="var(--gray-dark)" />
          </IconButton>
          <IconButton onClick={delete_btn}>
            <Close htmlColor="orangered" fontSize="small" />
          </IconButton>
        </p>
      </li>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  card: {
    background: "var(--background-color)",
    boxShadow: "var(--box-shadow-light)",
    borderRadius: 5,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid lightblue",
    marginBottom: 15,
  },

  list: {
    listStyle: "none",
    textTransform: "capitalize",
    fontSize: 14,
    fontWeight: "400",
    // paddingRight: 10,
    height: "100%",
    overflow: "hidden",
    padding: "5px 15px",
  },
  item: {
    listStyle: "none",
    height: 50,
    width: 0.2,
    background: "lightblue",
    borderRadius: 10,
  },
  text: {
    margin: 0,
    fontSize: 14,
    fontWeight: 400,
    textTransform: "capitalize",
    padding: "5px 15px",
    background: "#f4f4f4", // Light background for text
    borderRadius: 8,
  },
};
export default MyTaskCard;

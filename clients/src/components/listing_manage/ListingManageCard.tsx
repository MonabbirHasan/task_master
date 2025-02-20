import React from "react";
import "./listing_manage_card.css";
import { Card, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
interface ListingCardProps {
  id: number;
  card_type: string;
  type: "task" | "gig"; // Distinguish Task vs Gig
  title: string;
  category: string;
  price?: number; // Only for gigs
  deadline?: string; // Only for tasks
  status: "active" | "pending" | "completed";
  onEdit: () => void;
  onPreview: () => void;
  onDelete: () => void;
}
const ListingManageCard: React.FC<ListingCardProps> = ({
  id,
  card_type,
  type,
  title,
  category,
  price,
  deadline,
  status,
  onEdit,
  onPreview,
  onDelete,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="listing_manage_card">
      <Card style={styles.card}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <p className="text-capitalize ">
            status -<span className="text-capitalize text-success">active</span>{" "}
          </p>
          <IconButton size="small" onClick={handleClick}>
            <MoreVert fontSize="small" />
          </IconButton>
        </Stack>
        <h4 className="card_title" style={styles.cardHeaderTitle}>
          {title}
        </h4>
        <div className="card_content_grid">
          <Stack direction="column">
            <span style={styles.card_content_grid_item}>Type - {type}</span>
            <span style={styles.card_content_grid_item}>price - ${price}</span>
            <span style={styles.card_content_grid_item}>
              delivary time - 2 days
            </span>
            <span style={styles.card_content_grid_item}>
              category - {category}
            </span>
          </Stack>
        </div>
      </Card>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem style={{ fontSize: 12 }} onClick={onEdit}>
          Edit
        </MenuItem>
        <MenuItem style={{ fontSize: 12 }} onClick={onPreview}>
          Preview
        </MenuItem>
        <MenuItem style={{ fontSize: 12 }} onClick={onDelete}>
          Delete
        </MenuItem>
      </Menu>
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  card: {
    padding: "1.5rem",
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease",
    marginBottom: 5,
  },
  cardHover: {
    boxShadow: "0 8px 40px rgba(0, 0, 0, 0.15)",
  },

  cardHeaderTitle: {
    fontSize: "var(--font-size-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--black)",
    paddingTop: 3,
    textTransform: "capitalize",
  },
  cardHeaderCategory: {
    fontSize: "0.875rem",
    color: "#6b7280",
    marginTop: "0.25rem",
  },
  cardContent: {
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },
  statusText: {
    fontSize: "0.75rem",
    fontWeight: "bold",
    color: status === "active" ? "#16a34a" : "#9ca3af",
  },
  buttonContainer: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    borderRadius: "0.75rem",
    fontSize: "0.875rem",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
  },
  buttonPreview: {
    borderColor: "#3b82f6",
    color: "#3b82f6",
  },
  buttonEdit: {
    borderColor: "#f59e0b",
    color: "#f59e0b",
  },
  buttonHover: {
    backgroundColor: "#e0f2fe", // Hover color for Preview button
  },
  buttonHoverEdit: {
    backgroundColor: "#fef3c7", // Hover color for Edit button
  },
  card_content_grid_item: {
    textTransform: "capitalize",
    fontSize: "14px",
    // fontWeight: "500",
  },
};
export default ListingManageCard;

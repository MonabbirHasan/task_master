import React from "react";
import "./listing_manage_card.css";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
interface ListingCardProps {
  id: number;
  card_type: string;
  type: "task" | "service"; // Distinguish Task vs Gig
  title: string;
  category: string;
  price?: number; // Only for gigs
  deadline?: string; // Only for tasks
  status: "active" | "pending" | "completed";
  onEdit: () => void;
  onPreview: () => void;
  onDelete: () => void;
}
const ListingManageTable: React.FC<ListingCardProps> = ({
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
    <tbody>
      <tr>
        <td style={styles.td}>{title}</td>
        <td style={styles.td}>{type}</td>
        <td style={styles.td}>{category}</td>
        <td style={styles.td}>Active</td>
        <td style={styles.td}>Feb 20, 2025</td>
        <td style={styles.actionCell}>
          <IconButton
            size="small"
            onClick={handleClick}
            style={styles.iconButton}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ddd")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#f4f4f4")
            }
          >
            <MoreVert />
          </IconButton>
        </td>
      </tr>
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
    </tbody>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  td: {
    padding: "12px 15px",
    fontSize: "var(--font-size-small)",
    color: "#555",
    borderBottom: "1px solid #f4f4f4",
    textTransform: "capitalize",
  },
};
export default ListingManageTable;

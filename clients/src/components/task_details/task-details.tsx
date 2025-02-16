import React, { useState } from "react";
import { Avatar, Chip, Divider, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Close } from "@mui/icons-material";
import { Offcanvas } from "react-bootstrap";
import "./task-details.css";

interface TaskDetailsProps {
  taskId: string;
  show: boolean;
  handleClose: () => void;
}

const TaskDetails: React.FC<TaskDetailsProps> = ({ show, handleClose }) => {
  const navigation = useNavigate();
  const [SingleTask] = useState({
    task_category: "Cleaning, Repair",
    task_status: "open",
    task_budget: "150",
    user_id: "12345",
    user_name: "John Doe",
    task_type: "House Cleaning",
    task_location: "New York, NY",
    task_date: "2025-02-20",
    task_flexible_time: "Flexible Timing",
    task_details: "Need a professional cleaner for a deep cleaning service in a 3-bedroom apartment."
  });

  const tagsArray = SingleTask?.task_category?.split(",").map(tag => tag.trim()).filter(tag => tag);

  return (
    <div className="task-details">
      <Offcanvas style={{ width: 550 }} placement="end" scroll={true} show={show} onHide={handleClose}>
        <Stack direction="row" justifyContent="space-between" padding={2} className="task-details_header">
          <h2 className="task-details_header-title">About</h2>
          <IconButton onClick={handleClose}>
            <Close htmlColor="var(--text-color)" />
          </IconButton>
        </Stack>

        <Offcanvas.Body className="task-details_body">
          <Divider className="task-details_divider" />
          <div className="task-details_status">
            {["open", "assigned", "completed", "cancelled"].map(status => (
              <Chip
                key={status}
                size="small"
                className={`task-details_status-chip ${SingleTask.task_status === status ? `task-details_status-chip-${status}` : ""}`}
                label={status.charAt(0).toUpperCase() + status.slice(1)}
              />
            ))}
          </div>

          <div className="task-details_card">
            <div className="task-details_card-left">
              <span className="task-details_budget-title">Task Budget</span>
              <h2 className="task-details_price">${parseFloat(SingleTask.task_budget)}</h2>
              <button className="task-details_offer-btn">Make an Offer</button>
            </div>
            <div className="task-details_card-right">
              <h5 className="task-details_posted-by">Posted by</h5>
              <Avatar className="task-details_author-avatar">
                {SingleTask.user_name.charAt(0)}
              </Avatar>
              <span className="task-details_author-name">{SingleTask.user_name}</span>
            </div>
          </div>

          <section className="task-details_info">
            <h3 className="task-details_title">{SingleTask.task_type}</h3>
            <Divider className="task-details_divider" />
            <div className="task-details_date-location">
              <div>
                <p className="task-details_location-title">Location</p>
                <span className="task-details_location">{SingleTask.task_location}</span>
              </div>
              <div>
                <p className="task-details_start-title">To be started on</p>
                <span className="task-details_start-date">{SingleTask.task_date}</span>
                <p>{SingleTask.task_flexible_time}</p>
              </div>
              <div>
                <button onClick={() => navigation("/post_task")} className="task-details_post-task-btn">
                  Post your task
                </button>
              </div>
            </div>

            <div className="task-details_tags">
              <p className="task-details_tags-title">Work Category</p>
              {tagsArray?.map((tag, index) => (
                <Chip key={index} className="task-details_tag" label={tag} variant="outlined" />
              ))}
            </div>

            <div className="task-details_content">
              <h4 className="task-details_content-title">Details</h4>
              <Divider />
              <p className="task-details_content-text">{SingleTask.task_details}</p>
            </div>

            <Divider className="task-details_divider" />
          </section>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default TaskDetails;

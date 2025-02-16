import React, { useState } from "react";
import "./post_task_component.css";
import { Typography } from "@mui/material";

const LocationSelector = ({ SelectedLocation }: any) => {
  const [Selected, setSelected] = useState("");
  const InPersonIcon: React.FC = () => {
    return (
      <svg height="32" width="32" viewBox="0 0 24 24">
        <path
          fill="white"
          fill-rule="evenodd"
          d="M13.413 11.412A1.927 1.927 0 0 1 12 12c-.55 0-1.02-.196-1.412-.588A1.923 1.923 0 0 1 10 10c0-.55.196-1.021.588-1.413A1.925 1.925 0 0 1 12 8c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.412Zm3.112 2.85c-.983 1.525-2.492 3.221-4.525 5.088-2.033-1.867-3.542-3.563-4.525-5.088C6.492 12.737 6 11.383 6 10.2c0-1.817.579-3.304 1.737-4.463C8.896 4.579 10.317 4 12 4c1.683 0 3.104.579 4.262 1.737C17.421 6.896 18 8.383 18 10.2c0 1.183-.492 2.537-1.475 4.062ZM5.988 15.637C7.313 17.596 9.317 19.717 12 22c2.683-2.283 4.688-4.404 6.013-6.363C19.338 13.679 20 11.867 20 10.2c0-2.5-.804-4.492-2.413-5.975C15.979 2.742 14.117 2 12 2c-2.117 0-3.979.742-5.587 2.225C4.804 5.708 4 7.7 4 10.2c0 1.667.663 3.479 1.988 5.437Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  };
  const OnlineIcon: React.FC = () => {
    return (
      <svg height="32" width="32" viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          fill="white"
          d="M5.588 22.413C5.979 22.804 6.45 23 7 23h10a1.93 1.93 0 0 0 1.413-.587A1.93 1.93 0 0 0 19 21V3a1.93 1.93 0 0 0-.587-1.413A1.928 1.928 0 0 0 17 1H7c-.55 0-1.02.196-1.412.587A1.927 1.927 0 0 0 5 3v18c0 .55.196 1.021.588 1.413ZM7 21v-1h10v1H7Zm10-3H7V6h10v12Zm0-14H7V3h10v1Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    );
  };
  const data = [
    {
      type: "in-person",
      content: "Select this if you need the Tasker physically there",
      Icon: <InPersonIcon />,
    },
    {
      type: "online",
      content: "Select this if the Tasker can do it from home",
      Icon: <OnlineIcon />,
    },
  ];
  return (
    <div className="LocationSelector">
      {data.map((items, index) => (
        <div
          className={`${
            Selected == items.type && "location_selected"
          } location_selector_card`}
          onClick={() => {
            setSelected(items.type);
            SelectedLocation(items.type);
          }}
        >
          {items.Icon}
          <Typography style={styles.itemText1} variant="body1">
            {items.type}
          </Typography>
          <Typography style={styles.itemText2} variant="caption">
            {items.content}
          </Typography>
        </div>
      ))}
    </div>
  );
};
const styles: { [key: string]: React.CSSProperties } = {
  itemText1: {
    textTransform: "capitalize",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
    color: "white",
  },
  itemText2: {
    textTransform: "capitalize",
    textAlign: "center",
    color: "white",
    fontSize: "14px",
  },
};
export default LocationSelector;

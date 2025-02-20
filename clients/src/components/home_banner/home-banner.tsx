import React, { useMemo, useState } from "react";
import { Carousel } from "react-bootstrap";

import "./home-banner.css";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
const HomeBanner: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  const slides = [
    {
      img: "https://2854569.fs1.hubspotusercontent-na1.net/hub/2854569/hubfs/how-to-go-above-and-beyond-as-a-service-team-leader-hero.png?width=1296&name=how-to-go-above-and-beyond-as-a-service-team-leader-hero.png",
    },
    {
      img: "https://cdn-ilbbopn.nitrocdn.com/SVGvFSqpfgDfrwmXJxRAhPppKjYSEgKl/assets/images/optimized/rev-ead3b4c/indeck.com/wp-content/uploads/elementor/thumbs/The-Importance-of-Regular-Industrial-Boiler-Service_1200x628-qbouq6bhzoefpiblsnc59abvhsmumjlzuwkqe56v0o.webp",
    },
    {
      img: "https://www.bu.edu/alumni/files/2020/03/gds-global-days-of-service-volunterr-online-2020-1200x500.jpg",
    },
    {
      img: "https://www.timetimer.com/cdn/shop/articles/Performing_Tasks_for_an_Extended_Period_of_Time.png?v=1716324172",
    },
  ];
  return (
    <section className="home-banner-section">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="w-full banner_slider"
      >
        {slides.map((items, index) => (
          <Carousel.Item>
            <img src={items.img} className="w-full" />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="home-banner-caption">
        <div className="hero-content">
          <h1>Find the Perfect Task for You. Anytime. Anywhere.</h1>
          <p>Browse through thousands of tasks or offer your services today.</p>
          <div className="search-container">
            <TextField
              variant="outlined"
              placeholder="Search for tasks..."
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                backgroundColor: "#fff",
                borderRadius: "30px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "30px",
                  paddingRight: "10px",
                },
                "& .MuiOutlinedInput-input": {
                  padding: "12px 14px",
                },
              }}
            />
          </div>
          <div className="cta-buttons">
            <button className="primary-cta">Post a Task</button>
            <button className="secondary-cta">Browse Tasks</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;

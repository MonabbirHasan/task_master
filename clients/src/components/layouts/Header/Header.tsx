import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, MenuItem, IconButton, Avatar, Stack } from "@mui/material";
import { Chat, Notifications } from "@mui/icons-material";
import "./Header.css";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const countriesWithCities: Record<string, string[]> = {
  Australia: ["Sydney", "Melbourne", "Brisbane", "Darwin", "Perth"],
  USA: ["New York", "Los Angeles", "Chicago", "Houston"],
};

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("Australia");
  const [selectedCity, setSelectedCity] = useState<string>("Sydney");
  const navigate = useNavigate();

  const availableCities = useMemo(
    () => countriesWithCities[selectedCountry] || [],
    [selectedCountry]
  );

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      console.log("Logging out...");
      navigate("/login");
    }
  };

  const menuItems = [
    { name: "My Profile", link: "/profile" },
    { name: "Favorites", link: "/profile/favorites" },
    // { name: "Dashboard", link: "/dashboard" },
    { name: "My Tasks", link: "/profile/my-tasks" },
    { name: "My Service", link: "/profile/my-service" },
    { name: "Create Service", link: "/profile/create_service" },
    { name: "Payment History", link: "/profile/payment-history" },
    { name: "Billing Payment", link: "/profile/billing_payment" },
    { name: "Settings", link: "/settings/profile" },
    { name: "Help", link: "/help" },
    { name: "Support", link: "/support" },
    { name: "Logout", link: "#", onClick: handleLogout },
  ];
  //////////////////////////////
  //
  //////////////////////////////
  const headerMenuItems = [
    {
      name: "blogs",
      route: "/blog",
    },
    // {
    //   name: "my task",
    //   route: "/my-tasks",
    // },
    // {
    //   name: "category",
    //   route: "/category",
    // },
    {
      name: "Services",
      route: "/services",
    },
    // {
    //   name: "Support",
    //   route: "/chat",
    // },
    {
      name: "browse task",
      route: "/browse-tasks",
    },
    {
      name: "Post Your Task",
      route: "/post-task",
    },
  ];
  const categories = [
    "Accountant",
    "Admin Assistant",
    "Appliance Repair",
    "Architect",
    "Auto Electrician",
    "AV Specialist",
    "Barista",
    "Bartender",
    "Bookkeeper",
    "Bricklayer",
    "Cabinet Maker",
    "Car Wash",
    "Carpenter",
    "Carpet Cleaner",
    "Caterer",
    "Chef",
    "Cleaner",
    "Clothing Alteration",
    "Commercial Cleaner",
    "Concreter",
    "Cooking",
    "Copywriter",
    "Courier Services",
    "Data Entry Specialist",
    "Decking",
    "Delivery",
    "Designer",
    "Digital Design",
    "Drafting",
    "Driving",
    "End of Lease Cleaner",
    "Engraving",
    "Entertainment",
    "Events Staff",
    "Fencing",
    "Flooring",
    "Food Delivery",
    "Furniture Assembler",
    "Garden Maintenance",
    "Gardener",
    "General Labour",
    "Graffiti Artist",
    "Grocery Delivery",
    "Handyman",
    "HIIT Trainer",
    "Home Maintenance",
    "Home Theatre Installer",
    "House Cleaner",
    "Housekeeper",
    "Interior Designer",
    "IT Support",
    "Landscaper",
    "Locksmith",
    "Logo Designer",
    "Makeup Artist",
    "Marketing",
    "Mechanic",
    "Mobile Bike Repair",
    "Office Cleaner",
    "Painter",
    "Paver",
    "Pest Controller",
    "Pet Groomer",
    "Pet Minder",
    "Pilates Instructor",
    "Plasterer",
    "Project Management",
    "Proofreader",
    "Property Maintenance",
    "Receptionist",
    "Removalist",
    "Research Assistant",
    "Resume Writer",
    "Roofing",
    "Rubbish Removal",
    "Tax Accountant",
    "Tradesman",
    "Translator",
    "Turf Laying",
    "Tutor",
    "Virtual Assistant",
    "Wait Staff",
    "Waterproofing",
    "Web Design & Developer",
    "Wedding Services",
    "Window Cleaner",
    "Yoga Instructor",
  ];

  return (
    <header className="header">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <h1 className="brand_logo">
              <NavLink to="/" className="brand_logo">
                Task Master
              </NavLink>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* HEDER COUNTRY SELECTION */}
          <Stack direction="row" spacing={1} boxSizing="border-box">
            <Form.Select
              size="sm"
              value={selectedCountry}
              onChange={(e: any) => {
                const country = e.target.value;
                setSelectedCountry(country);
                setSelectedCity(countriesWithCities[country][0]);
              }}
            >
              {Object.keys(countriesWithCities).map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </Form.Select>

            <Form.Select
              size="sm"
              value={selectedCity}
              onChange={(e: any) => setSelectedCity(e.target.value)}
              className="dropdown"
              aria-label="Select City"
            >
              {availableCities.map((city: string) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Form.Select>
          </Stack>

          {/* HEADER NAV MENU LIST */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              {headerMenuItems.map((items, index) => (
                <div key={index}>
                  <Nav.Link>
                    <NavLink
                      className={`header_menu ${
                        items.route == "/post-task" && "post_task"
                      }`}
                      to={items.route}
                    >
                      {items.name}
                    </NavLink>
                  </Nav.Link>
                </div>
              ))}
            </Nav>

            <IconButton
              onClick={() => {
                navigate("/notifications");
              }}
            >
              <Notifications fontSize="medium" htmlColor="var(--text-light)" />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate("/chat");
              }}
            >
              <Chat fontSize="medium" htmlColor="var(--text-light)" />
            </IconButton>
            <IconButton onClick={handleProfileClick}>
              <Avatar
                sx={{
                  backgroundColor: "var(--background-color)",
                  color: "var(--text-dark)",
                }}
              >
                H
              </Avatar>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  padding: "0.5rem",
                  minWidth: "200px",
                },
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() => {
                    if (item.onClick) {
                      item.onClick();
                    } else {
                      navigate(item.link);
                    }
                    handleClose();
                  }}
                  className="menu-item"
                >
                  {item.name}
                </MenuItem>
              ))}
            </Menu>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

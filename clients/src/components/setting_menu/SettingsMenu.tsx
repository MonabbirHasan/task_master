import React, { useEffect, useState } from "react";
import { Nav, NavItem, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./setting_menu.css";
const sidebar_menu = [
  {
    name: "Profile Settings",
    route: "/settings/profile",
  },
  {
    name: "Account Settings",
    route: "/settings/account",
  },
  {
    name: "Payment Settings",
    route: "/settings/payments",
  },
  {
    name: "Privacy Settings",
    route: "/settings/privacy",
  },
  {
    name: "Notifications",
    route: "/settings/notifications",
  },
  {
    name: "Subscription",
    route: "/settings/subscriptions",
  },
  {
    name: "Security",
    route: "/settings/security",
  },
  {
    name: "Appearance",
    route: "/settings/appearance",
  },
];
const SettingsMenu = () => {
  const navigation_url = location.href.split("/")[4];
  const [ActiveUrl, setActiveUrl] = useState<string>("");
  useEffect(() => {
    let url = ActiveUrl.split("/")[2];
  }, [ActiveUrl]);

  return (
    <div className="setting_page_sidebar" style={{}}>
      <Button className=" d-lg-none d-md-block d-sm-block position-absolute">
        open sidebar
      </Button>
      <Nav defaultActiveKey="/profile" className="setting_page_sidebar_menu">
        {sidebar_menu.map((items, index) => (
          <NavItem
            className={`${
              items.route.split("/")[2] === navigation_url &&
              "setting_sidebar_menu_active"
            }`}
          >
            <Link onClick={() => setActiveUrl(items.route)} to={items.route}>
              {items.name}
            </Link>
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default SettingsMenu;

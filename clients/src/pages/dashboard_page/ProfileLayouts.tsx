import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../../components/layouts/Header/Header";
import { NavLink } from "react-router-dom";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";

const ProfileLayouts = () => {
  return (
    <div>
      <Header />
      <main className="profile-content ">
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayouts;

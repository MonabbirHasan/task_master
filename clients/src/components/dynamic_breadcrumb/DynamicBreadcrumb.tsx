import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Home } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const DynamicBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="sdetails_breadcrumbs">
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          <Home /> Home
        </Breadcrumb.Item>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <Breadcrumb.Item key={to} active>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item key={to} linkAs={Link} linkProps={{ to }}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default DynamicBreadcrumb;

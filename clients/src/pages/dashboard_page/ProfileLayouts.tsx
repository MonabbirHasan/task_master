import React from "react";
import { Outlet } from "react-router-dom";
import Layout from "../../components/layouts/Layout";

const ProfileLayouts: React.FC = () => {
  return (
    <Layout>
      <main className="profile-content ">
        <Outlet />
      </main>
    </Layout>
  );
};

export default ProfileLayouts;

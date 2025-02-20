import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "../pages/Forgot Password/forgot-password";
import TaskList from "../pages/Task List/task-list";
import ChangePassword from "../pages/Change Password/change-password";
import Messages from "../pages/Messages/Messages";
import PostTask from "../pages/post_tasks/post-task";
import PaymentHistory from "../pages/dashboard_page/Payment History/payment-history";
import PaymentMethods from "../pages/PaymentMethods/payment-methods";

import FeaturedTask from "../pages/Featured Tasks/featured-task";
import TaskDetails from "../pages/Task Details/task-details";
import SettingsPage from "../pages/Setting/setting-page";
import HelpPage from "../pages/Help/help-page";
import SupportPage from "../pages/Support/support-page";
import FAQPage from "../pages/FAQ/faq-page";
import WalletPage from "../pages/Get Payment/wallet-page";
import BrowseTaskPage from "../pages/Browse_task_page/BrowseTaskPage";

import {
  LoginPage,
  SignupPage,
  MyTaskPage,
  BlogPage,
  ServicesPage,
  PostServicePage,
  ProfilePage,
  ProfileViewPage,
  FavoritePage,
  ProfileLayouts,
  BlogDetails,
  HomePage,
  NotificationPage,
} from "../pages/page";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />

      {/* Profile pages using ProfileLayout */}
      <Route path="/profile" element={<ProfileLayouts />}>
        <Route index element={<ProfilePage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="my-tasks" element={<MyTaskPage />} />
        <Route path="create_service" element={<PostServicePage />} />
      </Route>

      <Route path="/task_list" element={<TaskList />} />
      <Route path="/post-task" element={<PostTask />} />
      <Route path="/browse-tasks" element={<BrowseTaskPage />} />
      <Route path="/task-detail" element={<TaskDetails />} />

      {/* <Route path="/favourite-tasks" element={<FavouriteTask />} /> */}
      <Route path="/featured-tasks" element={<FeaturedTask />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/profile/view" element={<ProfileViewPage />} />
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
      {/* 
      <Route path="/profile/view" element={<ProfileViewPage />} /> */}
      <Route path="/notifications" element={<NotificationPage />} />
      <Route path="/chat" element={<Messages />} />
      <Route path="/payment-history" element={<PaymentHistory />} />
      <Route path="/payment-method" element={<PaymentMethods />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="/wallet" element={<WalletPage />} />

      <Route path="/blog" element={<BlogPage />} />
      <Route path="/blog/:id" element={<BlogDetails />} />

      <Route path="/help" element={<HelpPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/FAQ" element={<FAQPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChangePassword from "../pages/Change Password/change-password";
import BrowseTaskPage from "../pages/Browse_task_page/BrowseTaskPage";
import ForgotPassword from "../pages/Forgot Password/forgot-password";
import FeaturedTask from "../pages/Featured Tasks/featured-task";
import WalletPage from "../pages/Get Payment/wallet-page";
import SupportPage from "../pages/Support/support-page";
import PostTask from "../pages/post_tasks/post-task";
import TaskList from "../pages/Task List/task-list";
import Messages from "../pages/Messages/Messages";
import HelpPage from "../pages/Help/help-page";
import FAQPage from "../pages/FAQ/faq-page";

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
  TaskDetails,
  ServiceDetails,
  MyServicePage,
  BillingPaymentPage,
  PaymentHistoryPage,
  SettingLayout,
  ProfileSettingPage,
  AccountSettingPage,
  NotificationSettingPage,
  SubscriptionSettingPage,
} from "../pages/page";

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      {/* settings layouts */}
      <Route path="/settings" element={<SettingLayout />}>
        <Route path="profile" element={<ProfileSettingPage />} />
        <Route path="account" element={<AccountSettingPage />} />
        <Route path="notifications" element={<NotificationSettingPage />} />
        <Route path="subscriptions" element={<SubscriptionSettingPage />} />
      </Route>
      {/* Profile pages using ProfileLayout */}
      <Route path="/profile" element={<ProfileLayouts />}>
        <Route index element={<ProfilePage />} />
        <Route path="favorites" element={<FavoritePage />} />
        <Route path="my-tasks" element={<MyTaskPage />} />
        <Route path="my-service" element={<MyServicePage />} />
        <Route path="create_service" element={<PostServicePage />} />
        <Route path="billing_payment" element={<BillingPaymentPage />} />
        <Route path="payment-history" element={<PaymentHistoryPage />} />
      </Route>

      <Route path="/task_list" element={<TaskList />} />
      <Route path="/post-task" element={<PostTask />} />
      <Route path="/browse-tasks" element={<BrowseTaskPage />} />
      <Route path="/task-detail" element={<TaskDetails />} />

      {/* <Route path="/favourite-tasks" element={<FavouriteTask />} /> */}
      <Route path="/featured-tasks" element={<FeaturedTask />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/service_details" element={<ServiceDetails />} />
      <Route path="/profile/view" element={<ProfileViewPage />} />
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
      {/* 
      <Route path="/profile/view" element={<ProfileViewPage />} /> */}
      <Route path="/notifications" element={<NotificationPage />} />
      <Route path="/chat" element={<Messages />} />
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
